export const initialClaimMasterFormState = {excel_file: null };
export const ClaimMasterFormFields = (formData, onChange) => [
        {
          label: "Upload File",
          type: "file",
          name: "excel_file",
          value: formData.excel_file,
          onChange,
          accept: ".xlsx, .xls",
        },
      ];
export const ClaimMasterFormButton = (selectedFile) => [
        {
          type: "submit",
          label: "Upload",
          className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",
          disabled: !selectedFile,
        },
      ];
