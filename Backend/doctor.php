<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *"); // Specify your frontend origin
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

// Database configuration
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "medical-bill";

// Database connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$my_table = "doctors"; // Table name

// Handle CRUD operations
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Fetch all doctors
        $sql = "SELECT * FROM $my_table";
        $result = $conn->query($sql);
        $doctors = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $doctors[] = $row;
            }
        }
        echo json_encode($doctors);
        break;

    case 'POST':
        // Add a new doctor
        $data = json_decode(file_get_contents("php://input"), true);
        $name = $data['name'];
        $degree = $data['degree'];

        if (!isset($name) || !isset($degree)) {
            http_response_code(400);
            echo json_encode(["error" => "Name and Degree are required"]);
            break;
        }

        $sql = "INSERT INTO $my_table (name, degree) VALUES ('$name', '$degree')";
        if ($conn->query($sql)) {
            $id = $conn->insert_id; // Get the last inserted ID
            echo json_encode(["id" => $id, "name" => $name, "degree" => $degree]);
        } else {
            echo json_encode(["error" => "Error adding doctor: " . $conn->error]);
        }
        break;

    case 'PUT':
        // Update a doctor
        $id = isset($_GET["id"]) ? $_GET["id"] : null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID is required"]);
            break;
        }

        $data = json_decode(file_get_contents("php://input"), true);
        $name = $data['name'];
        $degree = $data['degree'];

        if (!isset($name) || !isset($degree)) {
            http_response_code(400);
            echo json_encode(["error" => "Name and Degree are required"]);
            break;
        }

        $sql = "UPDATE $my_table SET name='$name', degree='$degree' WHERE id=$id";
        if ($conn->query($sql)) {
            echo json_encode(["id" => $id, "name" => $name, "degree" => $degree]);
        } else {
            echo json_encode(["error" => "Error updating doctor: " . $conn->error]);
        }
        break;

    case 'DELETE':
        // Delete a doctor
        $id = isset($_GET["id"]) ? $_GET["id"] : null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID is required"]);
            break;
        }

        $sql = "DELETE FROM $my_table WHERE id=$id";
        if ($conn->query($sql)) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["error" => "Error deleting doctor: " . $conn->error]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Invalid request method"]);
        break;
}

$conn->close();
?>