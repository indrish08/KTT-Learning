const models = require("./models")

/*
    User and Order
User.createOrder( // order attributes )
User.addOrder(order)
User.addOrders([order, order2])
User.setOrders([order])
User.getOrders()
User.removeOrder(order)
*/

/* 
    Order and Product
getProducts: Retrieve all associated products.
setProducts: Associate or update the associated products.
addProduct: Associate a single product.
addProducts: Associate multiple products.
createProduct: Create and associate a new product.
removeProduct: Disassociate a single product.
removeProducts: Disassociate multiple products.
*/

async function getOrders() {
    const user1 = await models.User.findByPk(2)
    const orders = await user1.getOrders()
    
    orders.forEach(async order => {
        var products = await order.getProducts()
        
        console.log('Order: ', JSON.parse(JSON.stringify(order)).id);
        products.forEach(product => {
            console.log(JSON.parse(JSON.stringify(product)));
        });
    });
}

async function getProducts() {
    const order = await models.Order.findByPk(1)
    console.log(await order.getProducts());
}

async function createOrder() {
    var address = 'CBE'
    var order = await models.Order.create({
        orderDate: new Date(), 
        dispatchDate: new Date(), 
        status: 'Ordered',
        shippingAddress: address,
        billingAddress: address,
        phone: '7876543210',
        paymentMethod: 'COD',
    })
}

async function createProduct() {
    var product1 = {name: 'PB Rockerz 260', price: 949}
    var product2 = {name: 'PB Rockerz 255 Pro', price: 899}
    var product3 = {name: 'PB Rockerz 235', price: 999}
    var product4 = {name: 'PB Airpods 141', price: 1299}
    await models.Product.create({
        name: product4.name, 
        price: product4.price, 
        taxPercentage: 18.0,
        stock: 1,
        warrantyPeriod: 1,
        shippingCharges: 49.0,
        soldBy: 'Seller1',
        sellerAddress: 'Chennai'
    })
}

async function addProductToOrder() {
    const order = await models.Order.findByPk(4)
    const product = await models.Product.findByPk(1)
    await order.addProduct(product, { through: { quantity: 1 } });    
}

async function addOrderToUser(){
    const user = await models.User.findByPk(2)
    const order = await models.Order.findByPk(4)
    await user.addOrder(order)
}

async function main(){
    // await createOrder()
    // await createProduct()
    // await addProductToOrder()
    // await addOrderToUser()
    await getOrders()
    // await getProducts()
}

main()