<?php
header("Content-type: text/plain");

$engine = $_REQUEST['engine'];

switch ($engine) {
	case "mysql":
		$dbh = new PDO("mysql:host=localhost;dbname=oth", "oth", "password");
		break;
	case "pgsql":
	default:
		$dbh = new PDO("pgsql:dbname=oth", "oth", "password");
		break;
}

if (!$dbh) {
	echo(json_encode(array("error" => $dbh->errorInfo()[2])));
	die();
}

$stm = $dbh->query($_REQUEST['stmt']);
if (!$stm) {
	echo(json_encode(array("error" => $dbh->errorInfo()[2])));
	die();
}

$res = $stm->fetchAll(PDO::FETCH_CLASS);

echo(json_encode(array("data" => $res)));

?>
