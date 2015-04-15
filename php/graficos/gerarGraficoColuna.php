<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];
	$acao = $_REQUEST['acao'];

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];
	$queryString = "SELECT mediaAtual, cotacao, siglaCons FROM movsaldo where login = '$login' and siglaCons = '$acao' LIMIT $start, $limit";
	//$queryString = "SELECT mediaAtual, cotacao FROM movsaldo where login = 'Jonathan' and siglaCons = '$acao' LIMIT 0, 25";

	//consulta sql
	$query = mysql_query($queryString);

	//faz um looping e cria um array com os campos da consulta
	$resultado = array();
	while($valores = mysql_fetch_assoc($query)) {
	    $resultado[] = $valores;
	}

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,		
		"grafico" => $resultado
	));
	
?>