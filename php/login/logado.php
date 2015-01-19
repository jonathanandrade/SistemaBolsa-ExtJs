<?php

require("../conectar.php");

session_start();

$userName = $_SESSION['login'];

echo $userName;


?>