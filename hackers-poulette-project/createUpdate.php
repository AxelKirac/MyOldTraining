<?php
	include 'mesFunctionsSQL.php';
	include 'mesFunctionsTable.php';
	$action = $_GET["action"];

	if ($action == "DELETE") {
		$id = $_GET["id"];
	} else {
		$id = $_GET["id"];
		$name = $_GET["name"];
		$firstname = $_GET["firstname"];
		$emailadress = $_GET["emailadress"];
		$file = $_GET["file"];
		$description = $_GET["description"];
		
	}
	

	if ($action == "CREATE") {
		createUser($name, $firstname, $emailadress, $description, $file);

		echo "user cree <br>";
		echo "<a href='index.php'>Liste des utilisateurs</a>";
		
	}
	
	if ($action == "UPDATE") {
		updateUser($id, $name, $firstname, $emailadress, $description, $file);
		echo "user update <br>";
		echo "<a href='index.php'>Liste des utilisateurs</a>";
	}
	if ($action == "DELETE") {
		deleteUser($id);
		echo "user delete <br>";
		echo "<a href='index.php'>Liste des utilisateurs</a>";
	}
	

	
?>
