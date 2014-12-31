<?php
 
	require("../conectar.php");

	session_start();

	$userName = $_POST['user'];
	$pass = $_POST['password'];

	$userName = stripslashes($userName);
	$pass = stripslashes($pass);

	$userName = $mysqli->real_escape_string($userName);
	$pass = $mysqli->real_escape_string($pass);

	$sql = "SELECT * FROM usuario WHERE nome ='$userName' and senha = '$pass'";

	$result = array();
	if ($resultdb = $mysqli->query($sql)) {
		$count = $resultdb->num_rows;
		if($count==1){
			$_SESSION['authenticated'] = "yes";
			$_SESSION['username'] = $userName;
			$result['success'] = true;
			$result['msg'] = 'User authenticated!';
		} else {
			$result['success'] = false;
			$result['msg'] = 'Incorrect user or password.';
		}

		$resultdb->close();
	}

	$mysqli->close();

	echo json_encode($result);
?>