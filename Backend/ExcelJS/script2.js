const Excel = require('exceljs');

const filename = 'Excel Files/KTT-CRM AssetLog-80835-20240228.xlsx';
const new_file = 'Excel Files/KTT-CRM AssetLog-80835-20240228-output-2.xlsx';

const readWorkbook = new Excel.Workbook();
const writeWorkbook = new Excel.Workbook();

async function processExcel() {
    try {
        await readWorkbook.xlsx.readFile(filename);
        const sheet1 = readWorkbook.getWorksheet(1);
        const rowCount = sheet1.rowCount;

        const newSheet = writeWorkbook.addWorksheet('Sheet1');

        const headerRow = sheet1.getRow(1).values.slice(1, 8);
        headerRow.push('Gyroscope (X)', 'Gyroscope (Y)', 'Gyroscope (Z)', 'Accelerometer (X)', 'Accelerometer (Y)', 'Accelerometer (Z)');
        newSheet.addRow(headerRow);

        const batchSize = 100;
        for (let i = 2; i <= rowCount; i += batchSize) {
            const endRow = Math.min(i + batchSize - 1, rowCount);
            await processBatch(sheet1, newSheet, i, endRow);
        }

        await writeWorkbook.xlsx.writeFile(new_file);
        console.log('File saved!');
    } catch (error) {
        console.log(error);
    }
}

async function processBatch(sheet1, newSheet, startRow, endRow) {
    for (let i = startRow; i <= endRow; i++) {
        const rowValues = sheet1.getRow(i).values.slice(1, 8);
        const gyroscope = JSON.parse(sheet1.getRow(i).values[8]);
        const accelerometer = JSON.parse(sheet1.getRow(i).values[9]);

        for (let j = 0; j < accelerometer.length; j++) {
            const newRow = rowValues.slice()
                .concat(gyroscope[j])
                .concat(accelerometer[j]);
            newSheet.addRow(newRow);
        }
    }
}

processExcel();
