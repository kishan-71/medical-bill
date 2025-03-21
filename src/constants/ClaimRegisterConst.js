// DemoConst.js
export const cInitialFormState = { reg_sr_no:"", claim_id : "", claim_date : "", claim_recd_date : "", emp_no : "", emp_name : "", desig : "", place_of_working : "", patient_name : "", relation : "", disease_name : "", dr_name : "", total_claim_amt : "", sanctioned_amt : "", disallowed_amt : "", sanctioned_amt_words : "", hospital_stay : "", consultion : "", reconsulation_1 : "", reconsulation_2 : "", reconsulation_3 : "", remarks : "", };
/**
 * Form fields configuration for the demo form
 * @param {Object} formData - Current form state
 * @param {Function} onChange - Handler for form input changes
 * @returns {Array} Array of field configurations
 */
export const cFormFields = (formData, onChange) => [
  {
    label: "Register Sr. No.",
    type: "text",
    name: "Register_Sr_No",
    value: formData.Register_Sr_No,
    onChange: onChange,
    placeholder: "Enter Register No",
    flex: 5,
  },
  {
    label: "Claim ID",
    type: "text",
    name: "Claim_ID",
    value: formData.Claim_ID,
    onChange: onChange,
    placeholder: "Enter Claim ID",
    flex: 5,
  },
  {
    label: "Date Of Application",
    type: "date",
    name: "Date_Of_Application",
    value: formData.Date_Of_Application,
    onChange: onChange,
    flex: 5,
  },
  {
    label: "Claim Recived Date",
    type: "date",
    name: "claim_recived_date",
    value: formData.claim_recived_date,
    onChange: onChange,
    flex: 5,
  },
  {
    label: "Employee Number",
    type: "text",
    name: "Employee_Number",
    value: formData.Employee_Number,
    onChange: onChange,
    placeholder: "Enter Employee No.",
    flex: 5,
  },
  {
    label: "Employee Name",
    type: "text",
    name: "Name",
    value: formData.Name,
    onChange: onChange,
    placeholder: "Enter Employee Name",
    flex: 3,
  },
  {
    label: "Designation",
    type: "text",
    name: "Designation",
    value: formData.Designation,
    onChange: onChange,
    placeholder: "Enter Designation",
    flex: 5,
  },
  {
    label: "Place of working",
    type: "text",
    name: "Organization",
    value: formData.Organization,
    onChange: onChange,
    placeholder: "Enter Place of Working",
    flex: 5,
  },
  {
    label: "Patient Name - *",
    type: "text",
    name: "PatientName",
    value: formData.PatientName,
    onChange: onChange,
    placeholder: "Enter Patient Name",
    flex: 4,
  },
  {
    label: "Relation",
    type: "text",
    name: "Relation",
    value: formData.Relation,
    onChange: onChange,
    placeholder: "Enter Relation",
    flex: 5,
  },
  {
    label: "Disease Name",
    type: "text",
    name: "Disease_Name",
    value: formData.Disease_Name,
    onChange: onChange,
    placeholder: "Enter Disease Name",
    flex: 5,
  },
  {
    label: "Dr Name",
    type: "select",
    name: "Dr_Name",
    value: formData.Dr_Name,
    onChange: onChange,
    options: "[/*populate options from LOV here*/]",
    placeholder: "Select Doctor",
    flex: 5,
  },
  {
    label: "Claim Amount",
    type: "number",
    name: "Claim_Amount",
    value: formData.Claim_Amount,
    onChange: onChange,
    placeholder: "Enter Total Claim Amount",
    flex: 5,
  },
  {
    label: "Sanctioned Amount",
    type: "number",
    name: "Sanctioned_Amount",
    value: formData.Sanctioned_Amount,
    onChange: onChange,
    placeholder: "Enter Sanctioned Amount",
    flex: 5,
  },
  {
    label: "Disallowed Amount",
    type: "number",
    name: "Disallowed_Amount",
    value: formData.Disallowed_Amount,
    onChange: onChange,
    placeholder: "Enter Disallowed Amount",
    flex: 5,
  },
  
  {
    label: "Hospital Stay",
    type: "text",
    name: "Hospital_Stay",
    value: formData.Hospital_Stay,
    onChange: onChange,
    placeholder: "Enter Hospital Stay Details",
    flex: 5,
  },
  {
    label: "Consultation",
    type: "text",
    name: "Consultation",
    value: formData.Consultation,
    onChange: onChange,
    placeholder: "Enter Consultation Details",
    flex: 5,
  },
  {
    label: "Reconsultation 1",
    type: "text",
    name: "Reconsultation_1",
    value: formData.Reconsultation_1,
    onChange: onChange,
    placeholder: "Enter Reconsulation 1 Details",
    flex: 5,
  },
  {
    label: "Reconsultation 2",
    type: "text",
    name: "Reconsultation_2",
    value: formData.Reconsultation_2,
    onChange: onChange,
    placeholder: "Enter Reconsulation 2 Details",
    flex: 5,
  },
  {
    label: "Reconsultation 3",
    type: "text",
    name: "Reconsultation_3",
    value: formData.Reconsultation_3,
    onChange: onChange,
    placeholder: "Enter Reconsulation 3 Details",
    flex: 5,
  },
  {
    label: "Remarks",
    type: "textarea",
    name: "remarks",
    value: formData.remarks,
    onChange: onChange,
    placeholder: "Enter Remarks",
    flex: 5,
  }
];


/**
 * Form button configuration
 * @param {Object|null} editItem - Item being edited, if any
 * @returns {Array} Array of button configurations
 */
export const cFormButton = (editItem) => [
  {
    type: "submit",
    label: editItem ? "Update" : "Submit",
    className: "bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded",
  },
  {
    type: "reset",
    label: "Reset",
    className: "bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded",
  },
];

/**
 * Table column mapping for headers to data keys
 */
export const cTableCol = {
  "Reg. Sr. No": "reg_sr_no",
  "Claim Id": "claim_id",
  "Claim Date": "claim_date",
  "Emp. No": "emp_no",
  "Emp. Name": "name",
};

/**
 * Table actions configuration
 * @param {Function} onEdit - Handler for edit action
 * @param {Function} onDelete - Handler for delete action
 * @returns {Array} Array of action configurations
 */
export const cTableActions = (onEdit, onDelete) => [
  {
    label: "Edit",
    action: onEdit,
    className: "bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded",
  },
  {
    label: "Delete",
    action: onDelete,
    className: "bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded",
  },
];