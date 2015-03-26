<?php
	include("../conectar.php");

	$link = "http://www.bmfbovespa.com.br/Pregao-Online/ExecutaAcaoAjax.asp?CodigoPapel=";
	
	$sql = mysql_query("SELECT sigla FROM movimento WHERE login = 'Jonathan'") or die(mysql_error());

	while($sigla = mysql_fetch_assoc($sql)) {

		$link .= "|" . $sigla['sigla'];
		
	}
	
	echo $link;

?>