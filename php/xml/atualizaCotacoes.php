<?php	
	// Esse código PHP faz a atualização da tabela movsaldo, para fazer a comparação entre a cotação atual da ação com a média das cotações do usuario
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];

	$info = $_POST['data'];
	$data = json_decode($info);

	foreach ($data as $valor) {
		$sigla = $valor->Codigo;
		$nome = $valor->Nome;
		$medio = $valor->Medio;
		$ultimo = $valor->Ultimo;
		$oscilacao = $valor->Oscilacao;

		$new = str_replace(",", ".", $ultimo);
		
		mysql_query("UPDATE movsaldo set cotacao = '$new' where login = '$login' and siglaCons = '$sigla'");
	}

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));

	$mysqli->close();

?>