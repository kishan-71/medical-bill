import * as XLSX from "xlsx";

/**
 * Reads an Excel file and converts it to JSON.
 * @param {File} file - The selected Excel file.
 * @param {Function} callback - Callback function to return the parsed JSON data.
 */
export const readExcelFile = (file, callback) => {
  const reader = new FileReader();
  reader.readAsBinaryString(file);

  reader.onload = (event) => {
    const binaryStr = event.target.result;
    const workbook = XLSX.read(binaryStr, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    if (jsonData.length === 0) { alert("The file is empty!"); return; }
    callback(jsonData);
  };
  reader.onerror = (error) => { console.error("Error reading file:", error); };
};

/**
 * Exports JSON data to an Excel file.
 * @param {Array} data - The table data to export.
 * @param {string} fileName - The name of the Excel file to save.
 */
export const exportToExcel = (data, fileName = "ClaimMaster.xlsx") => {
  if (data.length === 0) { alert("No data available to export."); return; }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "ClaimMaster");

  XLSX.writeFile(workbook, fileName);
};
