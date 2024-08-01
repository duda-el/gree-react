import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelReader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/base.xlsx')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.arrayBuffer();
      })
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet);
        setData(sheetData);
      })
      .catch((error) => {
        console.error('Error fetching the Excel file:', error);
      });
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ExcelReader;
