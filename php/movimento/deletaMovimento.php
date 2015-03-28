<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
	include("bancoMovimento.php");

	session_start();
	$login = $_SESSION['login'];

	$info = $_POST['movimento'];
	$data = json_decode(stripslashes($info));
	$sigla = $data->sigla;
	$id = $data->idmovimento;	
	//consulta sql
	$query = sprintf("DELETE FROM movimento WHERE idmovimento=%d",
		mysql_real_escape_string($id));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0
	));

	// Atualizando quantidade de ações na tabela movsaldo
	atualizaQuantidade($login, $sigla);

	// Atualizando média
	atualizaMedia($login, $sigla);
	
?>