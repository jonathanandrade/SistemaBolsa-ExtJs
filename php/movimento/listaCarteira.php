<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];
	$queryString = "SELECT idmovsaldo, siglaCons, qtdTotal, mediaAtual, cotacao FROM movsaldo where login = '$login' LIMIT $start, $limit";
	//$queryString = "SELECT idmovsaldo, siglaCons, qtdTotal, mediaAtual, cotacao FROM movsaldo where login = '$login' LIMIT 0, 25";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$carteiras = array();
	while($carteira = mysql_fetch_assoc($query)) {
	    $carteiras[] = $carteira;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query("SELECT count(*) as num FROM movsaldo where login = '$login'") or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];
	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"carteira" => $carteiras
	));
?>