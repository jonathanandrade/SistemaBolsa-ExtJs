<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];

	$info = $_POST['empresa'];
	$data = json_decode($info);
	$descricao = $data->descricao;
	$sigla = $data->sigla;
	$atividade = $data->atividade;
	//consulta sql
	$query = sprintf("INSERT INTO empresa (descricao, sigla, atividade, login) values ('%s', '%s', '%s', '%s')",
		mysql_real_escape_string($descricao),
		mysql_real_escape_string($sigla),
		mysql_real_escape_string($atividade),
		mysql_real_escape_string($login));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"empresas" => array(
			"idempresa" => mysql_insert_id(),
			"descricao" => $descricao,
			"sigla" => $sigla,
			"atividade" => $atividade,
			"login" => $login
		)
	));
?>