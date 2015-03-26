<?php
    //chama o arquivo de conexão com o bd
    include("../conectar.php");
    session_start();
    $login = $_SESSION['login'];

    //consulta sql
    $query = mysql_query("SELECT DISTINCT (sigla) FROM empresa where login = '$login'") or die(mysql_error());

    //faz um looping e cria um array com os campos da consulta
    $rows = array('data' => array());
    while($state = mysql_fetch_assoc($query)) {
        $rows['data'][] = $state;
    }
    //encoda para formato JSON
    echo json_encode($rows);
?>