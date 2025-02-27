<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173"); // Specify your frontend origin (avoid * in production)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

// Database configuration
$dbHost = "localhost";
$dbName = "medical-bill";
$dbUser = "root"; // Replace with your MySQL username
$dbPass = ""; // Replace with your MySQL password

try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

// Get HTTP method
$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "GET":
        $stmt = $pdo->query("SELECT * FROM doctors");
        $doctors = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($doctors);
        break;

    case "POST":
        $data = json_decode(file_get_contents("php://input"), true);
        if (!isset($data["name"]) || !isset($data["degree"])) {
            http_response_code(400);
            echo json_encode(["error" => "Name and Degree are required"]);
            exit;
        }
        $stmt = $pdo->prepare("INSERT INTO doctors (name, degree) VALUES (:name, :degree)");
        $stmt->execute([":name" => $data["name"], ":degree" => $data["degree"]]);
        $id = $pdo->lastInsertId();
        echo json_encode(["id" => $id, "name" => $data["name"], "degree" => $data["degree"]]);
        break;

    case "PUT":
        $id = isset($_GET["id"]) ? $_GET["id"] : null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID is required"]);
            exit;
        }
        $data = json_decode(file_get_contents("php://input"), true);
        if (!isset($data["name"]) || !isset($data["degree"])) {
            http_response_code(400);
            echo json_encode(["error" => "Name and Degree are required"]);
            exit;
        }
        $stmt = $pdo->prepare("UPDATE doctors SET name = :name, degree = :degree WHERE id = :id");
        $stmt->execute([":id" => $id, ":name" => $data["name"], ":degree" => $data["degree"]]);
        echo json_encode(["id" => $id, "name" => $data["name"], "degree" => $data["degree"]]);
        break;

    case "DELETE":
        $id = isset($_GET["id"]) ? $_GET["id"] : null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID is required"]);
            exit;
        }
        $stmt = $pdo->prepare("DELETE FROM doctors WHERE id = :id");
        $stmt->execute([":id" => $id]);
        echo json_encode(["success" => true]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        break;
}
?>