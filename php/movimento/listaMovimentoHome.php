<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];
	$sigla = $_REQUEST['movimento'];	
	
	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];
	//$queryString = "SELECT idmovimento, sigla, quantidade, total, valorUnitario, dataCompra, dataVenda, tipo FROM movimento where login = '$login' and tipo = 'C' and sigla = '$sigla' LIMIT $start, $limit"; 
	$queryString = "SELECT idmovimento, sigla, quantidade, total, valorUnitario, dataCompra, dataVenda, tipo, cotacao FROM movimento JOIN movsaldo on movimento.sigla = movsaldo.siglaCons and movimento.login = 'Jonathan' and movimento.tipo = 'C' and movimento.sigla = '$sigla'LIMIT $start, $limit";
	
	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$movimentos = array();
	while($movimento = mysql_fetch_assoc($query)) {
	    $movimentos[] = $movimento;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query("SELECT count(*) as num FROM movimento where login = '$login' and tipo = 'C' and sigla = '$sigla'") or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];
	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"movimento" => $movimentos
	));
?>