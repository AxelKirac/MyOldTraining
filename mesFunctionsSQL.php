<?php 
// error_reporting(E_ALL);
// ini_set('display_errors', '1');
	
	function getDatabaseConnexion() {
		try {
		    $user = "oeoeoe";
			$pass = "oeoeoe";
			$pdo = new PDO('mysql:host=localhost; dbname=becode;charset=utf8', 'oeoeoe', 'oeoeoe');
			 $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $pdo;
			
		} catch (PDOException $e) {
		    print "Erreur !: " . $e->getMessage() . "<br/>";
		    die();
		}
	}

	
	// récupere tous les users
	function getAllUsers() {
		$con = getDatabaseConnexion();
		$requete = 'SELECT * from support';
		$rows = $con->query($requete);
		return $rows;
	}

	// creer un user
	function createUser($name, $firstname, $emailadress, $file, $description) {
		try {
			
			$con = getDatabaseConnexion();
			$pre = $con->prepare( "INSERT INTO support (name, firstname, emailadress, description, file) 
					VALUES (?,?,?,?,?)");
					

	    	$pre->execute([$name, $firstname, $emailadress, $description, $file]);
		}
	    catch(PDOException $e) {
	    	echo $sql . "<br>" . $e->getMessage();
	    }
	}

	//recupere un user
	function readUser($id) {
		$con = getDatabaseConnexion();
		$requete = "SELECT * from support where id = '$id' ";
		$stmt = $con->query($requete);
		$row = $stmt->fetchAll();
		if (!empty($row)) {
			return $row[0];
		}
		
	}

	//met à jour le user
	function updateUser($id, $name, $firstname, $emailadress, $description, $file) {
		try {
			$con = getDatabaseConnexion();
			$pre = $con->prepare( "UPDATE support SET name= firstname,?, Age=?, Adresse=?
					where id = ? ");
					$pre->execute([$Prenom, intval($Age) ,$Adresse, $id]);
		}
	    catch(PDOException $e) {
	    	echo "<br>" . $e->getMessage();
	    }
	}

	// suprime un user
	function deleteUser($id) {
		try {
			$con = getDatabaseConnexion();
			$requete = "DELETE from support where id = '$id' ";
			$stmt = $con->query($requete);
		}
	    catch(PDOException $e) {
	    	echo $sql . "<br>" . $e->getMessage();
	    }
	}

	function getNewUser() {
		$user['id'] = "";
		$user['name'] = "";
		$user['firstname'] = "";
		$user['emailadress'] = "";
		$user['description'] = "";
		$user['file'] = "";
		
	}
	


 ?>
