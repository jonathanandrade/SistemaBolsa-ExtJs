<?php
    include("../conectar.php");

    // Tira o cabecalho
    header('Content-type: application/xml');

    session_start();
    $login = $_SESSION['login'];
    
    $link = "http://www.bmfbovespa.com.br/Pregao-Online/ExecutaAcaoAjax.asp?CodigoPapel=";

    $sql = mysql_query("SELECT DISTINCT(sigla) FROM movimento WHERE login = '$login'");

    while($sigla = mysql_fetch_assoc($sql)) {

        // Concatena no final do link as ações compradas
        $link .= "|" . $sigla['sigla'];
        
    }

    echo file_get_contents($link);

    
?>