<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
	include("bancoMovimento.php");

	session_start();
	$login = $_SESSION['login'];

	$info = $_POST['movimento'];
	$data = json_decode(stripslashes($info));
	$sigla = $data->sigla;
	$quantidade = $data->quantidade;
	$valorUnitario = $data->valorUnitario;
	$total = ($data->quantidade * $data->valorUnitario);
	$idmovimento = $data->idmovimento;
	$media = ($data->quantidade * $data->valorUnitario) / $data->quantidade;
	$dataCompra = date("Y/m/d");
	
	//consulta sql
	$query = sprintf("UPDATE movimento SET sigla = '%s', quantidade = '%s', valorUnitario = '%s', media = '%s', total = '%s', dataCompra = '%s' WHERE idmovimento=%d",
		mysql_real_escape_string($sigla),
		mysql_real_escape_string($quantidade),
		mysql_real_escape_string($valorUnitario),
		mysql_real_escape_string($media),
		mysql_real_escape_string($total),
		mysql_real_escape_string($dataCompra),
		mysql_real_escape_string($idmovimento));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"movimentos" => array(
			"idmovimento" => $idmovimento,
			"sigla" => $sigla,
			"quantidade" => $quantidade,
			"valorUnitario" => $valorUnitario,
			"total" => $total,
			"media" => $media,
			"dataCompra" => $dataCompra
		)
	));

	// Atualizando quantidade de ações na tabela movsaldo
	atualizaQuantidade($login, $sigla);

	// Atualizando média
	atualizaMedia($login, $sigla);
	
?>