<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['usuario'];

	function replace_unicode_escape_sequence($match) {
    	return mb_convert_encoding(pack('H*', $match[1]), 'UTF-8', 'UCS-2BE');
	}

	function unicode_decode($str) {
    	return preg_replace_callback('/\\\\u([0-9a-f]{4})/i', 'replace_unicode_escape_sequence', $str);
	}

	$info = unicode_decode($info);

	$data = json_decode(stripslashes($info));

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
	$cep = $data->email;
	$complemento = $data->complemento;
	$numero = $data->numero;
	$celular = $data->celular;
	$login = $data->login;
	$senha = $data->senha;
	//consulta sql
	$query = sprintf("INSERT INTO usuario (nome, sobrenome, email, cpf, rg, dataNasc,telefone,endereco,bairro,cidade,estado,cep,complemento,numero,celular,login,senha) values ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')",
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
		mysql_real_escape_string($login),
		mysql_real_escape_string($senha));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"usuarios" => array(
			"idusuario" => mysql_insert_id(),
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
			"celular" => $celular,
			"login" => $login,
			"senha" => $senha
		)
	));
?>


               
                
                
                login: values.login,
                senha: SistemaBolsa.util.M