var arr = ['Sl No', 'Loading Date', 'Unloading Date', 'Vehicle No', 'Challan No', 'Loading Quantity', 'Unloading Quantity', 'Billing Quantity', 'From Location', 'To Location', 'Rate', 'Frieight', 'SGST', 'CGST', 'IGST', 'Total Amount']

var c = ''
var res = arr.map(item => {
    c += "'1', "
    return {text: item, style: 'tableHeader'}
})

console.log(JSON.stringify(res), c);