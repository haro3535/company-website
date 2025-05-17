'use client';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import Papa from 'papaparse';
import ExcelJS from 'exceljs';



export default function RecordsPage() {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        // debugger;
        // const file = event.target.files?.[0];
        // if (!file) {
        //     alert('Please select a file');
        //     return;
        // }

        // const workbook = new ExcelJS.Workbook();
        // if (file.type.includes('xls') || file.type.includes('xlsx')) {
        //     await workbook.xlsx.readFile(file.name);
        //     workbook.eachSheet((sheet) => {
        //         const worksheet = sheet;
        //         const headerRow = worksheet.getRow(1);
        //         const headers   = headerRow.values as string[];
        //         console.log(headers);

        //         const data = [];
        //         worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
        //             if (rowNumber === 1) return; // Skip header row
        //             const rowData = {};
        //             headers.forEach((header, index) => {
        //                 rowData[header] = row.getCell(index + 1).value;
        //             });
        //             data.push(rowData);
        //         });

        //         setColumns(headers.map((h) => ({ field: h, headerName: h, flex: 1 })));
        //         setRows(data);
        //     })
        // }
        // else if (file.type.includes('csv')) {
        //     worksheet = await workbook.csv.readFile(file.name);
        // }

        // debugger;

        // const headerRow = worksheet.getRow(1);
        // const headers   = headerRow.values as string[];
        // console.log(headers);

        // const data = [];
        // worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
        //     if (rowNumber === 1) return; // Skip header row
        //     const rowData = {};
        //     headers.forEach((header, index) => {
        //         rowData[header] = row.getCell(index + 1).value;
        //     });
        //     data.push(rowData);
        // });

        // setColumns(headers.map((h) => ({ field: h, headerName: h, flex: 1 })));
        // setRows(data);

    }


    return (
        <div className="flex flex-col items-center justify-center w-3/4">
            <h1 className="text-4xl font-bold mb-4">Records</h1>
            <p className="text-lg">This is the Records page.</p>
            <div className="container shadow rounded-lg shadow-gray-500/50 p-4 mt-4 flex flex-col">
                <p>Merhaba</p>
                <Box sx={{ height: 600, width: '100%', p: 2 }}>
                    <Button variant="contained" component="label">
                        Upload Excel/CSV
                        <input type="file" hidden onChange={handleFileUpload} accept=".csv,.xlsx,.xls" />
                    </Button>
                    {rows.length > 0 && (
                        <DataGrid
                        sx={{ mt: 2 }}
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[10, 25, 50]}
                        />
                    )}
                </Box>
            </div>
        </div>
    );
}