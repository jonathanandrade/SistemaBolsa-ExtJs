<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();

	//$start = $_REQUEST['start'];
	//$limit = $_REQUEST['limit'];
	//$queryString = "SELECT * FROM usuario LIMIT $start, $limit";
	
	//$queryString = "SELECT * FROM usuario LIMIT 1, 25";

	$login = $_SESSION['login'];
	$queryString = "SELECT * FROM usuario where login = '$login'";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$usuarios = array();
	while($usuario = mysql_fetch_assoc($query)) {
	    $usuarios[] = $usuario;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query('SELECT count(*) as num FROM usuario') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];
	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"usuario" => $usuarios
	));
?>