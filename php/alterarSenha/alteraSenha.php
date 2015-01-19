<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['usuario'];
	$data = json_decode($info);
	$senha = $data->senha;
	$iduser = $data->iduser;
	
	//consulta sql
	$query = sprintf("UPDATE usuario SET senha = '%s' WHERE iduser=%d",
		mysql_real_escape_string($senha),
		mysql_real_escape_string($iduser));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"usuarios" => array(
			"iduser" => $iduser,
			"senha" => $senha
		)
	));
?>