<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
	include("bancoMovimento.php");

	session_start();
	$login = $_SESSION['login'];

	$info = $_POST['movimento'];
	$data = json_decode(stripslashes($info));
	$sigla = $data->sigla;
	$id = $data->idmovimento;	
	$quantidade = $data->quantidade;
	$dataCompra = $data->dataCompra;
	$valorUnitario = $data->valorUnitario;
	$media = $data->media;
	$total = ($data->quantidade * $data->valorUnitario);
	$dataVenda = date("Y/m/d");

	// Grava registro de venda
	$histVenda = mysql_query("INSERT INTO movimento (sigla, quantidade, valorUnitario, media, total, tipo, dataVenda, login, dataCompra) VALUES ('$sigla', '$quantidade', '$valorUnitario', '$media', '$total', 'V', '$dataVenda', '$login', '$dataCompra')") or die(mysql_error());

	//consulta sql
	$query = sprintf("DELETE FROM movimento WHERE idmovimento=%d",
		mysql_real_escape_string($id));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0
	));

	// Atualizando quantidade de ações na tabela movsaldo
	atualizaQuantidade($login, $sigla);

	// Atualizando média
	atualizaMedia($login, $sigla);

	// Remove dados da tabela movsaldo pois a ação selecionada não possui movimentos
	removeMovimentosZerados($login, $sigla)
	
?>