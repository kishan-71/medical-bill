export const cInitialFormState = {excel_file: "" };
export const cFormFields = (formData, onChange) => [
        {
          label: "Upload File",
          type: "file",
          name: "excel_file",
          value: formData.excel_file,
          onChange,
          accept: ".xlsx, .xls",
          flex: 2,
        },
      ];
export const cFormButton = (selectedFile) => [
        {
          type: "submit",
          label: "Upload",
          className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",
          disabled: !selectedFile,
          flex: 2,
        },
      ];

      export const cTableCol = {
        'Claim No': "claim_no",
        'Employee Number': "employee_number",
        'Name': "name",
        'Date of Application': "date_of_application",
        "Claim Amount": "claim_amount",
      };
