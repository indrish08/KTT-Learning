var arr = ['Sl No', 'Loading Date', 'Unloading Date', 'Vehicle No', 'Challan No', 'Loading Quantity', 'Unloading Quantity', 'Billing Quantity', 'From Location', 'To Location', 'Rate', 'Frieight', 'SGST', 'CGST', 'IGST', 'Total Amount']

var res = arr.map(item => {
    return {text: item, style: 'tableHeader'}
})

console.log((res));

