<?php
header('Access-Control-Allow-Origin: *'); // Restrict this in production!
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

require_once 'db_config.php';
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

$my_table = "claim_master";
switch ($_SERVER['REQUEST_METHOD']) {
	 case 'GET':
		$sql = "SELECT * FROM " . $my_table;
		$result = $conn->query($sql);
		$data = [];
		if ($result->num_rows > 0) {
			while ($row = $result->fetch_assoc()) {
				$data[] = $row;
			}
		}
		echo json_encode($data);
		break;
		
	case 'POST':
		$request = json_decode(file_get_contents("php://input"), true);
		$dataToSave = $request['data'];
		$totalRecords = count($dataToSave);
		
		
		foreach ($dataToSave as $record) {
			$claimNo = $record['Claim No'];

			// Check if the claim number already exists
			$checkSql = "SELECT id FROM $my_table WHERE claim_no = '$claimNo'"; // Replace your_table_name
			$checkResult = $conn->query($checkSql);

			if ($checkResult->num_rows > 0) {
				// Update the existing record
				$updateSql = "UPDATE $my_table SET "; // Replace your_table_name
				$updateSql .= "employee_number = '" . $record['Employee Number'] . "', ";
				$updateSql .= "name = '" . $record['Name'] . "', ";
				$updateSql .= "designation = '" . $record['Designation'] . "', ";
				$updateSql .= "organization = '" . $record['Organization'] . "', ";
				$updateSql .= "claim_type = '" . $record['Claim Type'] . "', ";
				$updateSql .= "date_of_application = '" . $record['Date Of Application'] . "', ";
				$updateSql .= "start_date_of_expense = '" . $record['Start Date Of Expense'] . "', ";
				$updateSql .= "end_date_of_expense = '" . $record['End Date Of Expense'] . "', ";
				$updateSql .= "claim_amount = '" . $record['Claim Amount'] . "', ";
				$updateSql .= "sanctioned_amount = '" . $record['Sanctioned Amount'] . "', ";
				$updateSql .= "disallowed_amount = '" . $record['Disallowed Amount'] . "', ";
				$updateSql .= "status = '" . $record['Status'] . "', ";
				$updateSql .= "patient_name = '" . $record['PatientName'] . "', ";
				$updateSql .= "relation = '" . $record['Relation'] . "', ";
				$updateSql .= "treatment_type = '" . $record['Treatnemt Type'] . "' ";  // **Speling **
				$updateSql .= "WHERE claim_no = '$claimNo'";
			} else {
				// Insert a new record
				$insertSql = "INSERT INTO $my_table (claim_no, employee_number, name, designation, organization, claim_type, date_of_application, start_date_of_expense, end_date_of_expense, claim_amount, sanctioned_amount, disallowed_amount, status, patient_name, relation, treatment_type) VALUES (";
				$insertSql .= "'" . $record['Claim No'] . "', ";
				$insertSql .= "'" . $record['Employee Number'] . "', ";
				$insertSql .= "'" . $record['Name'] . "', ";
				$insertSql .= "'" . $record['Designation'] . "', ";
				$insertSql .= "'" . $record['Organization'] . "', ";
				$insertSql .= "'" . $record['Claim Type'] . "', ";
				$insertSql .= "'" . $record['Date Of Application'] . "', ";
				$insertSql .= "'" . $record['Start Date Of Expense'] . "', ";
				$insertSql .= "'" . $record['End Date Of Expense'] . "', ";
				$insertSql .= "'" . $record['Claim Amount'] . "', ";
				$insertSql .= "'" . $record['Sanctioned Amount'] . "', ";
				$insertSql .= "'" . $record['Disallowed Amount'] . "', ";
				$insertSql .= "'" . $record['Status'] . "', ";
				$insertSql .= "'" . $record['PatientName'] . "', ";
				$insertSql .= "'" . $record['Relation'] . "', ";
				$insertSql .= "'" . $record['Treatnemt Type'] . "')";  // **Speling **
			}
		}
	break;
}

		
?>
