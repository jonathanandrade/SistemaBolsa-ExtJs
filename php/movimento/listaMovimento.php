<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];
	$queryString = "SELECT idmovimento, sigla, quantidade, total, valorUnitario, dataCompra, dataVenda FROM movimento where login = '$login' and tipo = 'C' LIMIT $start, $limit";
	//$queryString = "SELECT idmovimento, sigla, quantidade, valorUnitario FROM movimento LIMIT 0, 25";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$movimentos = array();
	while($movimento = mysql_fetch_assoc($query)) {
	    $movimentos[] = $movimento;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query("SELECT count(*) as num FROM movimento where login = '$login'") or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];
	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"movimento" => $movimentos
	));
?>