<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];

	$info = $_POST['movimento'];
	$data = json_decode(stripslashes($info));
	$sigla = $data->sigla;
	$quantidade = $data->quantidade;
	$valorUnitario = $data->valorUnitario;
	$media = $data->media;
	$tipo = $data->tipo;
	//consulta sql
	$query = sprintf("INSERT INTO movimento (sigla, quantidade, valorUnitario, media, tipo, login) values ('%s', '%s', '%s', '%s', '%s', '%s')",
		mysql_real_escape_string($sigla),
		mysql_real_escape_string($quantidade),
		mysql_real_escape_string($valorUnitario),
		mysql_real_escape_string($media),
		mysql_real_escape_string($tipo),
		mysql_real_escape_string($login));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"movimentos" => array(
			"idmovimento" => mysql_insert_id(),
			"sigla" => $sigla,
			"quantidade" => $quantidade,
			"valorUnitario" => $valorUnitario,
			"media" => $media,
			"tipo" => $tipo,
			"login" => $login
		)
	));
?>