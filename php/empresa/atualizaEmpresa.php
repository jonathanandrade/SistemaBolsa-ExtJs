<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['empresa'];
	$data = json_decode($info);
	$descricao = $data->descricao;
	$sigla = $data->sigla;
	$atividade = $data->atividade;
	$idempresa = $data->idempresa;
	//consulta sql
	$query = sprintf("UPDATE empresa SET descricao = '%s', sigla = '%s', atividade = '%s' WHERE idempresa=%d",
		mysql_real_escape_string($descricao),
		mysql_real_escape_string($sigla),
		mysql_real_escape_string($atividade),
		mysql_real_escape_string($idempresa));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"empresas" => array(
			"idempresa" => $idempresa,
			"descricao" => $descricao,
			"sigla" => $sigla,
			"atividade" => $atividade
		)
	));
?>