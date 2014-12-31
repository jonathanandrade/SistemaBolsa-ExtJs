<?php
 
	//nome do servidor (127.0.0.1)
	$servidor = "127.0.0.1";
	 
	//usuário do banco de dados
	$user = "root";
	 
	//senha do banco de dados
	$senha = "";
	 
	//nome da base de dados
	$db = "sistemabolsa";
 
	$mysqli = new mysqli($servidor, $user, $senha, $db);

	// Confere conexao
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
	
?>