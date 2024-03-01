var tableData = [
    ['1', '01/01/2024', '01/02/2024', 'ABC123', 'CH001', '100', '90', '10', 'Location1', 'Location2', '5', '500', '50', '50', '0', '550'],
    ['2', '02/01/2024', '02/02/2024', 'XYZ456', 'CH002', '120', '110', '10', 'Location2', 'Location3', '6', '600', '60', '60', '0', '660'],
    ['3', '03/01/2024', '03/02/2024', 'PQR789', 'CH003', '80', '70', '10', 'Location3', 'Location4', '7', '700', '70', '70', '0', '770'],
    ['4', '04/01/2024', '04/02/2024', 'LMN456', 'CH004', '150', '140', '10', 'Location4', 'Location5', '8', '800', '80', '80', '0', '880'],
    ['5', '05/01/2024', '05/02/2024', 'JKL789', 'CH005', '110', '100', '10', 'Location5', 'Location6', '9', '900', '90', '90', '0', '990'],
    ['6', '06/01/2024', '06/02/2024', 'DEF123', 'CH006', '95', '85', '10', 'Location6', 'Location7', '10', '1000', '100', '100', '0', '1100'],
    ['7', '07/01/2024', '07/02/2024', 'GHI456', 'CH007', '120', '110', '10', 'Location7', 'Location8', '11', '1100', '110', '110', '0', '1210'],
    ['8', '08/01/2024', '08/02/2024', 'ABC789', 'CH008', '85', '75', '10', 'Location8', 'Location9', '12', '1200', '120', '120', '0', '1320'],
    ['9', '09/01/2024', '09/02/2024', 'XYZ123', 'CH009', '130', '120', '10', 'Location9', 'Location10', '13', '1300', '130', '130', '0', '1430'],
    ['10', '10/01/2024', '10/02/2024', 'PQR456', 'CH010', '105', '95', '10', 'Location10', 'Location11', '14', '1400', '140', '140', '0', '1540'],
    ['11', '11/01/2024', '11/02/2024', 'LMN789', 'CH011', '75', '65', '10', 'Location11', 'Location12', '15', '1500', '150', '150', '0', '1650'],
    ['12', '12/01/2024', '12/02/2024', 'JKL123', 'CH012', '140', '130', '10', 'Location12', 'Location13', '16', '1600', '160', '160', '0', '1760'],
    ['13', '13/01/2024', '13/02/2024', 'DEF456', 'CH013', '90', '80', '10', 'Location13', 'Location14', '17', '1700', '170', '170', '0', '1870'],
    ['14', '14/01/2024', '14/02/2024', 'GHI789', 'CH014', '125', '115', '10', 'Location14', 'Location15', '18', '1800', '180', '180', '0', '1980'],
    ['15', '15/01/2024', '15/02/2024', 'ABC123', 'CH015', '100', '90', '10', 'Location15', 'Location16', '19', '1900', '190', '190', '0', '2090'],
    ['16', '16/01/2024', '16/02/2024', 'XYZ456', 'CH016', '120', '110', '10', 'Location16', 'Location17', '20', '2000', '200', '200', '0', '2200'],
    ['17', '17/01/2024', '17/02/2024', 'PQR789', 'CH017', '80', '70', '10', 'Location17', 'Location18', '21', '2100', '210', '210', '0', '2310'],
    ['18', '18/01/2024', '18/02/2024', 'LMN456', 'CH018', '150', '140', '10', 'Location18', 'Location19', '22', '2200', '220', '220', '0', '2420'],
    ['19', '19/01/2024', '19/02/2024', 'JKL789', 'CH019', '110', '100', '10', 'Location19', 'Location20', '23', '2300', '230', '230', '0', '2530'],
    ['20', '20/01/2024', '20/02/2024', 'DEF123', 'CH020', '95', '85', '10', 'Location20', 'Location21', '24', '2400', '240', '240', '0', '2640'],
    ['21', '21/01/2024', '21/02/2024', 'GHI456', 'CH021', '120', '110', '10', 'Location21', 'Location22', '25', '2500', '250', '250', '0', '2750'],
    ['22', '22/01/2024', '22/02/2024', 'ABC789', 'CH022', '85', '75', '10', 'Location22', 'Location23', '26', '2600', '260', '260', '0', '2860'],
    ['23', '23/01/2024', '23/02/2024', 'XYZ123', 'CH023', '130', '120', '10', 'Location23', 'Location24', '27', '2700', '270', '270', '0', '2970'],
    ['24', '24/01/2024', '24/02/2024', 'PQR456', 'CH024', '105', '95', '10', 'Location24', 'Location25', '28', '2800', '280', '280', '0', '3080'],
    ['25', '25/01/2024', '25/02/2024', 'LMN789', 'CH025', '75', '65', '10', 'Location25', 'Location26', '29', '2900', '290', '290', '0', '3190'],
    ['26', '26/01/2024', '26/02/2024', 'JKL123', 'CH026', '140', '130', '10', 'Location26', 'Location27', '30', '3000', '300', '300', '0', '3300'],
    ['27', '27/01/2024', '27/02/2024', 'DEF456', 'CH027', '90', '80', '10', 'Location27', 'Location28', '31', '3100', '310', '310', '0', '3410'],
    ['28', '28/01/2024', '28/02/2024', 'GHI789', 'CH028', '125', '115', '10', 'Location28', 'Location29', '32', '3200', '320', '320', '0', '3520'],
    ['29', '29/01/2024', '29/02/2024', 'ABC123', 'CH029', '100', '90', '10', 'Location29', 'Location30', '33', '3300', '330', '330', '0', '3630'],
    ['30', '30/01/2024', '30/02/2024', 'XYZ456', 'CH030', '120', '110', '10', 'Location30', 'Location31', '34', '3400', '340', '340', '0', '3740'],
    ['31', '31/01/2024', '31/02/2024', 'PQR789', 'CH031', '80', '70', '10', 'Location31', 'Location32', '35', '3500', '350', '350', '0', '3850'],
    ['32', '01/02/2024', '01/03/2024', 'LMN456', 'CH032', '150', '140', '10', 'Location32', 'Location33', '36', '3600', '360', '360', '0', '3960'],
    ['33', '02/02/2024', '02/03/2024', 'JKL789', 'CH033', '110', '100', '10', 'Location33', 'Location34', '37', '3700', '370', '370', '0', '4070'],
    ['34', '03/02/2024', '03/03/2024', 'DEF123', 'CH034', '95', '85', '10', 'Location34', 'Location35', '38', '3800', '380', '380', '0', '4180'],
    ['35', '04/02/2024', '04/03/2024', 'GHI456', 'CH035', '120', '110', '10', 'Location35', 'Location36', '39', '3900', '390', '390', '0', '4290'],
    ['36', '05/02/2024', '05/03/2024', 'ABC789', 'CH036', '85', '75', '10', 'Location36', 'Location37', '40', '4000', '400', '400', '0', '4400'],
]

var billingPeriod = '01/01/2024 - 15/01/2024'
var SoNo = 'BR/01'
var invoiceNo = 'Inv/01'
var company = 'Ambuja Cements'

function sum(col) {
    var sum = 0;
    for (let i = 0; i < tableData.length; i++){
        sum += parseInt(tableData[i][col])
    }
    return sum
}

var dd = {
    pageOrientation: 'landscape',
    pageSize: 'A3',
	content: [
	    {
	        text: 'RDP Infracon',
	        style: 'header'
	    },
	    '\n',
	    {
	        columns: [
    	        {
    	            width: 90,
    	            text: 'Billing Period',
    	        },
    	        {
    	            text: billingPeriod
    	        }
	        ]
	    },
	    {
	        columns: [
    	        {
    	            width: 90,
    	            text: 'SO No.',
    	        },
    	        {
    	            text: SoNo
    	        }
	        ]
	    },
	    {
	        columns: [
    	        {
    	            width: 90,
    	            text: 'Invoice No.',
    	        },
    	        {
    	            text: invoiceNo
    	        }
	        ]
	    },
	    {
	        columns: [
    	        {
    	            width: 90,
    	            text: 'Company',
    	        },
    	        {
    	            text: company
    	        }
	        ]
	    },
	    '\n',
	    {
	        table: {
	            headerRows: 1,
	            widths: [30, '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', 'auto'],
	            body: [
	                [
                      { text: 'Sl No', style: 'tableHeader' },
                      { text: 'Loading Date', style: 'tableHeader' },
                      { text: 'Unloading Date', style: 'tableHeader' },
                      { text: 'Vehicle No', style: 'tableHeader' },
                      { text: 'Challan No', style: 'tableHeader' },
                      { text: 'Loading Quantity', style: 'tableHeader' },
                      { text: 'Unloading Quantity', style: 'tableHeader' },
                      { text: 'Billing Quantity', style: 'tableHeader' },
                      { text: 'From Location', style: 'tableHeader' },
                      { text: 'To Location', style: 'tableHeader' },
                      { text: 'Rate', style: 'tableHeader' },
                      { text: 'Frieight', style: 'tableHeader' },
                      { text: 'SGST', style: 'tableHeader' },
                      { text: 'CGST', style: 'tableHeader' },
                      { text: 'IGST', style: 'tableHeader' },
                      { text: 'Total Amount', style: 'tableHeader' }
                    ],
	                ...tableData.map(row => [
                        	{ text: row[0], alignment: 'right' },
                        	{ text: row[1], alignment: 'center' },
                        	{ text: row[2], alignment: 'center' },
                        	{ text: row[3] },
                        	{ text: row[4] },
                        	{ text: row[5], alignment: 'right' },
                        	{ text: row[6], alignment: 'right' },
                        	{ text: row[7], alignment: 'right' },
                        	{ text: row[8] },
                        	{ text: row[9] },
                        	{ text: row[10], alignment: 'right' },
                        	{ text: row[11], alignment: 'right' },
                        	{ text: row[12], alignment: 'right' },
                        	{ text: row[13], alignment: 'right' },
                        	{ text: row[14], alignment: 'right' },
                        	{ text: row[15], alignment: 'right' },
                        ]),
	                [
                        { colSpan: 7, text: 'SUM :' }, '', '', '', '', '', '', 
                        { text: sum(7), alignment: 'right' }, 
                        { colSpan: 3, text: '' }, '', '', 
                        { text: sum(11), alignment: 'right' }, 
                        { text: sum(12), alignment: 'right' }, 
                        { text: sum(13), alignment: 'right' }, 
                        { text: sum(14), alignment: 'right' }, 
                        { text: sum(15), alignment: 'right' }, 
                    ]
	            ]
	        }
	    }
	],
	styles: {
	    header: {
	        bold: true,
	        alignment: 'center'
	    },
	    tableHeader: {
	        bold: true,
	        alignment: 'center'
	    },
	    commonColumnStyle0: {
	        alignment: 'right'
	    }
	}
}