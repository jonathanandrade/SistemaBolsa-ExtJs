<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['corretora'];
	$data = json_decode(stripslashes($info));
	$razaoSocial = $data->razaoSocial;
	$nomeFantasia = $data->nomeFantasia;
	$cnpj = $data->cnpj;
	$endereco = $data->endereco;
	$cnpj = $data->cnpj;
	$bairro = $data->bairro;
	$cidade = $data->cidade;
	$estado = $data->estado;
	$cep = $data->cep;
	$complemento = $data->complemento;
	$numero = $data->numero;
	$contato = $data->contato;
	$telefone = $data->telefone;
	$idcorretora = $data->idcorretora;
	//consulta sql
	$query = sprintf("UPDATE corretora SET razaoSocial = '%s', nomeFantasia = '%s', cnpj = '%s', endereco = '%s',
		              bairro = '%s',cidade = '%s',estado = '%s',cep = '%s', complemento = '%s',numero = '%s',
		              contato = '%s',telefone = '%s' WHERE idcorretora=%d",
		mysql_real_escape_string($razaoSocial),
		mysql_real_escape_string($nomeFantasia),
		mysql_real_escape_string($cnpj),
		mysql_real_escape_string($endereco),
		mysql_real_escape_string($bairro),
		mysql_real_escape_string($cidade),
		mysql_real_escape_string($estado),
		mysql_real_escape_string($cep),
		mysql_real_escape_string($complemento),
		mysql_real_escape_string($numero),
		mysql_real_escape_string($contato),
		mysql_real_escape_string($telefone),
		mysql_real_escape_string($idcorretora));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"corretoras" => array(
			"idcorretora" => $idcorretora,
			"razaoSocial" => $razaoSocial,
			"nomeFantasia" => $nomeFantasia,
			"cnpj" => $cnpj,
			"endereco" => $endereco,
			"bairro" => $bairro,
			"cidade" => $cidade,
			"estado" => $estado,
			"cep" => $cep,
			"complemento" => $complemento,
			"numero" => $numero,
			"contato" => $contato,
			"telefone" => $telefone
		)
	));
?>