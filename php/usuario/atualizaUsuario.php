<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['usuario'];
	$data = json_decode($info);
	$nome = $data->nome;
	$sobrenome = $data->sobrenome;
	$email = $data->email;
	$cpf = $data->cpf;
	$rg = $data->rg;
	$dataNasc = $data->dataNasc;
	$telefone = $data->telefone;
	$endereco = $data->endereco;
	$bairro = $data->bairro;
	$cidade = $data->cidade;
	$estado = $data->estado;
	$cep = $data->cep;
	$complemento = $data->complemento;
	$numero = $data->numero;
	$celular = $data->celular;
	//$login = $data->login;
	//$senha = $data->senha;
	$iduser = $data->iduser;
	//consulta sql
	$query = sprintf("UPDATE usuario SET nome = '%s', sobrenome = '%s', email = '%s', cpf = '%s',
		              rg = '%s',dataNasc = '%s',telefone = '%s',endereco = '%s', bairro = '%s',cidade = '%s',
		              estado = '%s',cep = '%s',complemento = '%s',numero = '%s',celular = '%s' WHERE iduser=%d",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($sobrenome),
		mysql_real_escape_string($email),
		mysql_real_escape_string($cpf),
		mysql_real_escape_string($rg),
		mysql_real_escape_string($dataNasc),
		mysql_real_escape_string($telefone),
		mysql_real_escape_string($endereco),
		mysql_real_escape_string($bairro),
		mysql_real_escape_string($cidade),
		mysql_real_escape_string($estado),
		mysql_real_escape_string($cep),
		mysql_real_escape_string($complemento),
		mysql_real_escape_string($numero),
		mysql_real_escape_string($celular),
		mysql_real_escape_string($iduser));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"usuarios" => array(
			"iduser" => $iduser,
			"nome" => $nome,
			"sobrenome" => $sobrenome,
			"email" => $email,
			"cpf" => $cpf,
			"rg" => $rg,
			"dataNasc" => $dataNasc,
			"telefone" => $telefone,
			"endereco" => $endereco,
			"bairro" => $bairro,
			"cidade" => $cidade,
			"estado" => $estado,
			"cep" => $cep,
			"complemento" => $complemento,
			"numero" => $numero,
			"celular" => $celular
		)
	));
?>