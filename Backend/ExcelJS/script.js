const Excel = require('exceljs')

// run: node --max-old-space-size=4096 script.js

const filename = 'Excel Files/KTT-CRM AssetLog-80835-20240228.xlsx'
const new_file = 'Excel Files/KTT-CRM AssetLog-80835-20240228-output.xlsx'

const workbook = new Excel.Workbook()
const NewWorkbook = new Excel.Workbook()

workbook.xlsx.readFile(filename).then(async ()=>{
    const sheet1 = workbook.getWorksheet(1)
    
    var col = sheet1.columnCount
    var row = sheet1.rowCount
    console.log(col, row)
    
    const newSheet = NewWorkbook.addWorksheet('Sheet1')
    var new_row = sheet1.getRow(1).values.slice(1,8)
    new_row = new_row.concat(['Accelerometer (X)', 'Accelerometer (Y)', 'Accelerometer (Z)', 'Gyroscope (X)', 'Gyroscope (Y)', 'Gyroscope (Z)'])
    newSheet.addRow(new_row)
    
    for(let i=2; i<=row; i++){
        var row_values = sheet1.getRow(i).values.slice(1,8)
        var Gyroscope = JSON.parse(sheet1.getRow(i).values[8])
        var Accelerometer = JSON.parse(sheet1.getRow(i).values[9])
        for(let j=0; j<Accelerometer.length; j++){
            var new_row = row_values.slice()
            new_row = new_row.concat(Gyroscope[j])
            new_row = new_row.concat(Accelerometer[j])
            newSheet.addRow(new_row)
        }
    }
    
    NewWorkbook.xlsx.writeFile(new_file).then(() => {
        console.log('File saved!');
    }).catch((error) => {
        console.log(error)
    })
})