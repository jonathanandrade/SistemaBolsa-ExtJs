<?php

	//echo file_get_contents("http://www.bmfbovespa.com.br/Pregao-Online/ExecutaAcaoCarregarDadosPapeis.asp?CodDado=BBDC4");
	
	$link = "http://www.bmfbovespa.com.br/Pregao-Online/ExecutaAcaoCarregarDadosPapeis.asp?CodDado=";
	$acao = 'ANIM3';

	$link .= $acao;	

	$link = file_get_contents($link);
	//echo $link;

	//$link .= $acao;
	//echo $link;

	$quebra = array();
	$quebra = explode('=', $link);

	$parte0 = $quebra[0]; // D
	$parte1 = $quebra[1]; // Data
	$parte2 = $quebra[2]; // Variações
	$parte3 = $quebra[3]; // Final texto

	//echo "$parte0 <br>";
	//echo "$parte1 <br>";
	//echo "$parte2 <br>";
	//echo "$parte3 <br> <br>";
	
	$variacoes = explode('|', $parte2);

	$arrayJson = array();
	for ($i=0; $i < count($variacoes) - 1; $i++) {
		$tmp = explode('@', $variacoes[$i]);
		//echo "$tmp[0] <br>";
		//echo "$tmp[1] <br>";
		//echo "$tmp[2] <br>";

		$arrayJson[] = array(
			"hora" => $tmp[0],
			"valor" => $tmp[1]
			//,"oscilacao" => $tmp[2]
		);

		//echo "$variacoes[$i] <br>";
	}

	
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"grafico" => $arrayJson	
	));


?>
