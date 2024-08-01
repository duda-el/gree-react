import * as XLSX from 'xlsx';

export const parseExcelFile = async (filePath) => {
  const response = await fetch(filePath);
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  // Process the data according to your requirements
  const headers = data[0];
  const products = data.slice(1).map(row => {
    let product = {};
    headers.forEach((header, index) => {
      product[header] = row[index];
    });
    return product;
  });

  return products;
};
