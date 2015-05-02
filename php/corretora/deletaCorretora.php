<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['corretora'];
	$data = json_decode($info);
	$id = $data->idcorretora;
	//consulta sql
	$query = sprintf("DELETE FROM corretora WHERE idcorretora=%d",
		mysql_real_escape_string($id));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
?>