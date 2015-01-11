<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];
	$queryString = "SELECT * FROM empresa LIMIT $start, $limit";
	//$queryString = "SELECT * FROM empresa LIMIT 0, 25";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$empresas = array();
	while($empresa = mysql_fetch_assoc($query)) {
	    $empresas[] = $empresa;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query('SELECT count(*) as num FROM empresa') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];
	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"empresa" => $empresas
	));
?>