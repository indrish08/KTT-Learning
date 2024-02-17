const Excel = require('exceljs')

const filename = 'Excel Files/KTT-Dump-80835-Sample-02.xlsx'
const new_file = 'Excel Files/KTT-Dump-80835-Output-02.xlsx'

const workbook = new Excel.Workbook()
const NewWorkbook = new Excel.Workbook()

workbook.xlsx.readFile(filename).then(async ()=>{
    const sheet1 = workbook.getWorksheet(1)
    
    var col = sheet1.columnCount
    var row = sheet1.rowCount
    console.log(col, row)
    
    const newSheet = NewWorkbook.addWorksheet('Sheet1')
    var new_row = sheet1.getRow(1).values.slice(1,6)
    new_row = new_row.concat(['Accelerometer (X)', 'Accelerometer (Y)', 'Accelerometer (Z)', 'Gyroscope (X)', 'Gyroscope (Y)', 'Gyroscope (Z)'])
    newSheet.addRow(new_row)
    
    for(let i=2; i<=row; i++){
        var row_values = sheet1.getRow(i).values.slice(1,6)
        var Accelerometer = JSON.parse(sheet1.getRow(i).values[6])
        var Gyroscope = JSON.parse(sheet1.getRow(i).values[7])
        for(let j=0; j<Accelerometer.length; j++){
            var new_row = row_values.slice()
            new_row = new_row.concat(Accelerometer[j])
            new_row = new_row.concat(Gyroscope[j])
            newSheet.addRow(new_row)
        }
    }

    NewWorkbook.xlsx.writeFile(new_file)

    // newSheet.getRow(1).values = sheet1.getRow(1).values.slice(1,6)
    // var new_col = newSheet.columnCount
    // var new_row = newSheet.rowCount
    // newSheet.getCell(1,++new_col).value = 'Accelerometer (X)'
    // newSheet.getCell(1,++new_col).value = 'Accelerometer (Y)'
    // newSheet.getCell(1,++new_col).value = 'Accelerometer (Z)'
    // newSheet.getCell(1,++new_col).value = 'Gyroscope (X)'
    // newSheet.getCell(1,++new_col).value = 'Gyroscope (Y)'
    // newSheet.getCell(1,++new_col).value = 'Gyroscope (Z)'

    // var col6 = sheet1.getColumn(6).values.slice(2, row+1)
    // var col7 = sheet1.getColumn(6).values.slice(2, row+1)
    // for(let i=0; i < row-1; i++){
    //     console.log(JSON.parse(col6[i]).length, JSON.parse(col7[i]).length)
    // }
})