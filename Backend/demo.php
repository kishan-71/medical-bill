<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Database connection
require_once 'db_config.php'; // Your database configuration
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$my_table = "demo";
// Handle CRUD operations
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Fetch all users
        $sql = "SELECT * FROM $my_table";
        $result = $conn->query($sql);
        $users = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $users[] = $row;
            }
        }
        echo json_encode($users);
        break;

    case 'POST':
        // Add a new user
        $data = json_decode(file_get_contents("php://input"), true);
        $name = $data['name'];
        $email = $data['email'];
        $mobile = $data['mobile'];
        $dob = $data['dob'];

        $sql = "INSERT INTO $my_table (name, email, mobile, dob) VALUES ('$name', '$email', '$mobile', '$dob')";
        if ($conn->query($sql)) {
            echo json_encode(["message" => "User added successfully"]);
        } else {
            echo json_encode(["error" => "Error adding user"]);
        }
        break;

    case 'PUT':
        // Update a user
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data['id'];
        $name = $data['name'];
        $email = $data['email'];
        $mobile = $data['mobile'];
        $dob = $data['dob'];

        $sql = "UPDATE $my_table SET name='$name', email='$email', mobile='$mobile', dob='$dob' WHERE id=$id";
        if ($conn->query($sql)) {
            echo json_encode(["message" => "User updated successfully"]);
        } else {
            echo json_encode(["error" => "Error updating user"]);
        }
        break;

    case 'DELETE':
        // Delete a user
        $id = $_GET['id'];
        $sql = "DELETE FROM $my_table WHERE id=$id";
        if ($conn->query($sql)) {
            echo json_encode(["message" => "User deleted successfully"]);
        } else {
            echo json_encode(["error" => "Error deleting user"]);
        }
        break;

    default:
        echo json_encode(["error" => "Invalid request method"]);
        break;
}

$conn->close();
?>