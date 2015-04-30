<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];	

	// Lista todos os dados de todas as ações que estão na carteira
	if (empty($_REQUEST['acao'])) {

		$start = $_REQUEST['start'];
		$limit = $_REQUEST['limit'];
	
		$queryString = "SELECT idmovsaldo, siglaCons, qtdTotal, mediaAtual, cotacao FROM movsaldo where login = '$login' LIMIT $start, $limit";		

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

	} else {
		// Lista apenas os dados da açõa selecionada na tela Home para vender
		$acao = $_REQUEST['acao'];
		$queryString = "SELECT idmovsaldo, siglaCons, qtdTotal, mediaAtual, cotacao FROM movsaldo where login = '$login' and siglaCons = '$acao'";		

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

	}
	
?>