<?php

	include("../conectar.php");

	// Atualizando quantidade de ações na tabela movsaldo
	function atualizaQuantidade($login, $sigla) {
		$retornoQtd = mysql_query("SELECT sum(quantidade) from movimento where login = '$login' and sigla = '$sigla' and tipo = 'C'");
		$qtd = mysql_fetch_row($retornoQtd);		
		$sql = mysql_query("UPDATE movsaldo set qtdTotal = '$qtd[0]' where login = '$login' and siglaCons = '$sigla'");
	}

	// Atualizando média na tabela movsaldo
	function atualizaMedia($login, $sigla) {
		$retornoMedia = mysql_query("SELECT avg(media) from movimento where login = '$login' and sigla = '$sigla' and tipo = 'C'");
		$row = mysql_fetch_row($retornoMedia);
		$sql = mysql_query("UPDATE movsaldo set mediaAtual = '$row[0]' where login = '$login' and siglaCons = '$sigla'");
	}
	
	// Remove dados zerados da tabela movsaldo (sem movimentos para determinada ação)
	function removeMovimentosZerados($login, $sigla) {
		$retornoMovimento = mysql_query("SELECT qtdTotal, idmovsaldo from movsaldo where login = '$login' and siglaCons = '$sigla'");
		$mov = mysql_fetch_row($retornoMovimento);

		if ($mov[0] == '0') {
			$sql = mysql_query("DELETE from movsaldo where login = '$login' and idmovsaldo = '$mov[1]'");		
		}
	}

?>