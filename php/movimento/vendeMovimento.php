<?php

	//chama o arquivo de conexão com o bd	
	include("../conectar.php");
	include("bancoMovimento.php");

	session_start();
	$login = $_SESSION['login'];
	$info = $_POST['movimento'];
	$data = json_decode(stripslashes($info));
	$idmovimento = $data->idmovimento;
	$sigla = $data->sigla;
	$quantidade = $data->quantidade;
	$dataCompra = $data->dataCompra;
	$valorUnitario = $data->valorUnitario;
	$media = $data->media;
	$total = ($data->quantidade * $data->valorUnitario);
	$dataVenda = date("Y/m/d");

	// Grava registro de venda
	$histVenda = mysql_query("INSERT INTO movimento (sigla, quantidade, valorUnitario, media, total, tipo, dataVenda, login, dataCompra) VALUES ('$sigla', '$quantidade', '$valorUnitario', '$media', '$total', 'V', '$dataVenda', '$login', '$dataCompra')") or die(mysql_error());

	$retornoQtd = mysql_query("SELECT quantidade from movimento where login = '$login' and sigla = '$sigla' and idmovimento = '$idmovimento'");
	$qtd = mysql_fetch_row($retornoQtd);
	
	$quantidade = ($qtd[0] - $data->quantidade);

	//$valorUnitario = $data->valorUnitario;
	//$total = ($data->quantidade * $data->valorUnitario);
	//$idmovimento = $data->idmovimento;
	//$media = ($data->quantidade * $data->valorUnitario) / $data->quantidade;
	//$dataCompra = date("Y/m/d");
	
	//consulta sql
	$query = sprintf("UPDATE movimento SET quantidade = '%s', dataVenda = '%s' WHERE idmovimento=%d",
		mysql_real_escape_string($quantidade),
		mysql_real_escape_string($dataVenda),
		mysql_real_escape_string($idmovimento));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"movimentos" => array(
			"idmovimento" => $idmovimento,
			"dataVenda" => $dataVenda,
			"quantidade" => $quantidade
		)
	));

	// Atualizando quantidade de ações na tabela movsaldo
	atualizaQuantidade($login, $sigla);

	// Atualizando média
	atualizaMedia($login, $sigla);

	// Remove dados da tabela movsaldo pois a ação selecionada não possui movimentos
	removeMovimentosZerados($login, $sigla)

?>