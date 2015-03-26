<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();
	$login = $_SESSION['login'];

	$info = $_POST['movimento'];
	$data = json_decode(stripslashes($info));
	$sigla = $data->sigla;
	$quantidade = $data->quantidade;
	$valorUnitario = $data->valorUnitario;
	$media = $data->media;
	$total = $data->total;
	$tipo = $data->tipo;
	$dataCompra = date("Y/m/d");
	//consulta sql
	$query = sprintf("INSERT INTO movimento (sigla, quantidade, valorUnitario, media, total, tipo, login, dataCompra) values ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')",
		mysql_real_escape_string($sigla),
		mysql_real_escape_string($quantidade),
		mysql_real_escape_string($valorUnitario),
		mysql_real_escape_string($media),
		mysql_real_escape_string($total),
		mysql_real_escape_string($tipo),
		mysql_real_escape_string($login),
		mysql_real_escape_string($dataCompra));
	$rs = mysql_query($query);
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"movimentos" => array(
			"idmovimento" => mysql_insert_id(),
			"sigla" => $sigla,
			"quantidade" => $quantidade,
			"valorUnitario" => $valorUnitario,
			"media" => $media,
			"total" => $total,
			"tipo" => $tipo,
			"login" => $login,
			"dataCompra" => $dataCompra
		)
	));

	// Adicionando na tabela de saldos
	$retorno = mysql_query("select siglaCons from movsaldo where login = '$login' and siglaCons = '$sigla'");
	if (mysql_num_rows($retorno) > 0) {
		// Já possui lançamento
		$retornoQtd = mysql_query("select sum(quantidade) from movimento where login = '$login' and sigla = '$sigla'");
		$qtd = (int)$retornoQtd + $quantidade;
		$sql = mysql_query("update movsaldo set qtdTotal = '$qtd' where login = '$login' and siglaCons = '$sigla'");

	} else {
		// Primeiro lançamento
		$sql = mysql_query("insert into movsaldo (idmovsaldo, qtdTotal, mediaAtual, siglaCons, login) values (null, '$quantidade', '$media', '$sigla', '$login')");
	}	

?>