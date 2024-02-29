const models = require("./models")

const OrdersData = require('../../../Warranty Claim System/JSON_Datas/Orders.json')
const OrderProduct = require('../../../Warranty Claim System/JSON_Datas/OrderProduct.json')

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

/*
    const orders = await User.findAll({include: ['Orders']})
    const products = await Order.findAll({include: ['Products']})
*/

async function getOrders() {
    const user = await models.User.findByPk(2)
    const orders = await user.getOrders()
    
    orders.forEach(async order => {
        var products = await order.getProducts()
        if (products.length == 2) {
          console.log('Order: ', JSON.parse(JSON.stringify(order)).id,);
          products.forEach(product => {
              // console.log(JSON.parse(JSON.stringify(product)).id);
              // console.log(JSON.parse(JSON.stringify(product)));
          });

        }
    });
}

async function getProducts() {
    const order = await models.Order.findByPk(1)
    console.log(await order.getProducts());
}

async function createOrder() {
    OrdersData.forEach(async data => {
        // console.log(data);
        await models.Order.create(data)
    })
    // var address = 'CBE'
    // var order = await models.Order.create({
    //     orderDate: new Date(), 
    //     dispatchDate: new Date(), 
    //     status: 'Ordered',
    //     shippingAddress: address,
    //     billingAddress: address,
    //     phone: '7876543210',
    //     paymentMethod: 'COD',
    // })
}

async function createProduct() {
    var productsData = [{
        "name": "PB Rockerz 510",
        "price": 1685,
        "taxPercentage": 16,
        "description": "Noise-cancelling technology",
        "stock": 81,
        "warrantyPeriod": 2,
        "shippingCharges": 21,
        "soldBy": "BestBuy Sellers",
        "sellerAddress": "321 Pretend Road"
      }, {
        "name": "PB Airdopes 131 True Wireless Earbuds",
        "price": 2346,
        "taxPercentage": 9,
        "description": "Sleek design",
        "stock": 95,
        "warrantyPeriod": 2,
        "shippingCharges": 25,
        "soldBy": "BestBuy Sellers",
        "sellerAddress": "123 Fake Street"
      }, {
        "name": "PB Airdopes 441 Pro",
        "price": 1716,
        "taxPercentage": 9,
        "description": "Enhanced bass",
        "stock": 7,
        "warrantyPeriod": 1,
        "shippingCharges": 34,
        "soldBy": "GadgetGurus",
        "sellerAddress": "Villagetown"
      }, {
        "name": "PB BassHeads 100 In-Ear Headphones",
        "price": 1770,
        "taxPercentage": 9,
        "description": "Portable and lightweight",
        "stock": 37,
        "warrantyPeriod": 2,
        "shippingCharges": 18,
        "soldBy": "ElectroMart",
        "sellerAddress": "Canada"
      }, {
        "name": "PB BassHeads 225 Super Extra Bass",
        "price": 1817,
        "taxPercentage": 15,
        "description": "High-quality sound",
        "stock": 58,
        "warrantyPeriod": 2,
        "shippingCharges": 39,
        "soldBy": "GadgetGurus",
        "sellerAddress": "Canada"
      }, {
        "name": "PB Stone 650 Portable Bluetooth Speaker",
        "price": 841,
        "taxPercentage": 9,
        "description": "Long battery life",
        "stock": 41,
        "warrantyPeriod": 2,
        "shippingCharges": 33,
        "soldBy": "TechDeals Inc.",
        "sellerAddress": "UK"
      }, {
        "name": "PB Stone 1200 14W Bluetooth Speaker",
        "price": 1467,
        "taxPercentage": 15,
        "description": "Bluetooth connectivity",
        "stock": 9,
        "warrantyPeriod": 1,
        "shippingCharges": 13,
        "soldBy": "SmartSolutions",
        "sellerAddress": "Suburbia"
      }, {
        "name": "PB Nirvana 1007 Over-Ear Wireless Headphones",
        "price": 1545,
        "taxPercentage": 13,
        "description": "Bluetooth connectivity",
        "stock": 99,
        "warrantyPeriod": 1,
        "shippingCharges": 5,
        "soldBy": "TechDeals Inc.",
        "sellerAddress": "Australia"
      }, {
        "name": "PB Nirvana 717 ANC Active Noise Cancelling Headphones",
        "price": 1958,
        "taxPercentage": 12,
        "description": "Comfortable fit",
        "stock": 10,
        "warrantyPeriod": 1,
        "shippingCharges": 3,
        "soldBy": "TechDeals Inc.",
        "sellerAddress": "Suburbia"
      }, {
        "name": "PB Stormz 355 True Wireless Earbuds",
        "price": 2332,
        "taxPercentage": 13,
        "description": "High-quality sound",
        "stock": 88,
        "warrantyPeriod": 1,
        "shippingCharges": 21,
        "soldBy": "GadgetGurus",
        "sellerAddress": "Townsville"
      }, {
        "name": "PB Rhythm 880 On-Ear Headphones",
        "price": 2054,
        "taxPercentage": 10,
        "description": "Noise-cancelling technology",
        "stock": 7,
        "warrantyPeriod": 2,
        "shippingCharges": 36,
        "soldBy": "GadgetGurus",
        "sellerAddress": "USA"
      }, {
        "name": "PB Aero 550 Wireless Neckband",
        "price": 2465,
        "taxPercentage": 15,
        "description": "Easy to use controls",
        "stock": 21,
        "warrantyPeriod": 1,
        "shippingCharges": 11,
        "soldBy": "ElectroMart",
        "sellerAddress": "Villagetown"
      }, {
        "name": "PB Echo 360 Bluetooth Earphones",
        "price": 2145,
        "taxPercentage": 9,
        "description": "Easy to use controls",
        "stock": 46,
        "warrantyPeriod": 2,
        "shippingCharges": 29,
        "soldBy": "TechDeals Inc.",
        "sellerAddress": "789 Faux Lane"
      }, {
        "name": "PB Thump 120 In-Ear Headset",
        "price": 1898,
        "taxPercentage": 8,
        "description": "Enhanced bass",
        "stock": 44,
        "warrantyPeriod": 1,
        "shippingCharges": 6,
        "soldBy": "SmartSolutions",
        "sellerAddress": "789 Faux Lane"
      }, {
        "name": "PB Fusion 500 Over-Ear Headphones",
        "price": 1467,
        "taxPercentage": 15,
        "description": "Comfortable fit",
        "stock": 62,
        "warrantyPeriod": 2,
        "shippingCharges": 10,
        "soldBy": "BestBuy Sellers",
        "sellerAddress": "Canada"
      }, {
        "name": "PB Serenity 800 True Wireless ANC Earbuds",
        "price": 1787,
        "taxPercentage": 12,
        "description": "Water-resistant",
        "stock": 45,
        "warrantyPeriod": 1,
        "shippingCharges": 8,
        "soldBy": "BestBuy Sellers",
        "sellerAddress": "Canada"
      }, {
        "name": "PB Groove 920 Portable Bluetooth Speaker",
        "price": 2017,
        "taxPercentage": 8,
        "description": "Noise-cancelling technology",
        "stock": 62,
        "warrantyPeriod": 1,
        "shippingCharges": 1,
        "soldBy": "BestBuy Sellers",
        "sellerAddress": "France"
      }, {
        "name": "PB Sonic 600 Soundbar",
        "price": 963,
        "taxPercentage": 12,
        "description": "Long battery life",
        "stock": 23,
        "warrantyPeriod": 2,
        "shippingCharges": 18,
        "soldBy": "ElectroMart",
        "sellerAddress": "Townsville"
      }, {
        "name": "PB Harmony 1122 Wireless Gaming Headset",
        "price": 899,
        "taxPercentage": 11,
        "description": "Easy to use controls",
        "stock": 18,
        "warrantyPeriod": 2,
        "shippingCharges": 30,
        "soldBy": "GadgetGurus",
        "sellerAddress": "Canada"
      }, {
        "name": "PB Blaze 770 Sport Earphones",
        "price": 2435,
        "taxPercentage": 15,
        "description": "Long battery life",
        "stock": 53,
        "warrantyPeriod": 1,
        "shippingCharges": 33,
        "soldBy": "BestBuy Sellers",
        "sellerAddress": "France"
      }, {
        "name": "PB Zenith 2000 DJ Headphones",
        "price": 2464,
        "taxPercentage": 14,
        "description": "Bluetooth connectivity",
        "stock": 22,
        "warrantyPeriod": 2,
        "shippingCharges": 11,
        "soldBy": "SmartSolutions",
        "sellerAddress": "Dreamland"
      }, {
        "name": "PB Volt 335 In-Ear Monitors",
        "price": 1488,
        "taxPercentage": 9,
        "description": "Comfortable fit",
        "stock": 54,
        "warrantyPeriod": 1,
        "shippingCharges": 37,
        "soldBy": "ElectroMart",
        "sellerAddress": "654 Imaginary Drive"
      }, {
        "name": "PB Spark 150 Wired Earbuds",
        "price": 1449,
        "taxPercentage": 11,
        "description": "Water-resistant",
        "stock": 31,
        "warrantyPeriod": 2,
        "shippingCharges": 4,
        "soldBy": "ElectroMart",
        "sellerAddress": "Canada"
      }, {
        "name": "PB Nexus 1100 Gaming Headphones",
        "price": 1041,
        "taxPercentage": 14,
        "description": "Enhanced bass",
        "stock": 60,
        "warrantyPeriod": 2,
        "shippingCharges": 38,
        "soldBy": "SmartSolutions",
        "sellerAddress": "456 Mock Avenue"
      }, {
        "name": "PB Pulse 420 True Wireless Earbuds",
        "price": 1820,
        "taxPercentage": 13,
        "description": "Long battery life",
        "stock": 59,
        "warrantyPeriod": 2,
        "shippingCharges": 36,
        "soldBy": "GadgetGurus",
        "sellerAddress": "UK"
      }, {
        "name": "PB Nova 770 Over-Ear Bluetooth Headphones",
        "price": 2082,
        "taxPercentage": 16,
        "description": "Bluetooth connectivity",
        "stock": 67,
        "warrantyPeriod": 2,
        "shippingCharges": 21,
        "soldBy": "ElectroMart",
        "sellerAddress": "123 Fake Street"
      }, {
        "name": "PB Stealth 660 Gaming Headset",
        "price": 1622,
        "taxPercentage": 12,
        "description": "Water-resistant",
        "stock": 54,
        "warrantyPeriod": 1,
        "shippingCharges": 25,
        "soldBy": "TechDeals Inc.",
        "sellerAddress": "Cityville"
      }, {
        "name": "PB Vortex 880 Neckband Earphones",
        "price": 1589,
        "taxPercentage": 10,
        "description": "High-quality sound",
        "stock": 15,
        "warrantyPeriod": 1,
        "shippingCharges": 25,
        "soldBy": "SmartSolutions",
        "sellerAddress": "456 Mock Avenue"
      }, {
        "name": "PB Impact 325 In-Ear Bass Headphones",
        "price": 2242,
        "taxPercentage": 16,
        "description": "High-quality sound",
        "stock": 30,
        "warrantyPeriod": 1,
        "shippingCharges": 26,
        "soldBy": "GadgetGurus",
        "sellerAddress": "321 Pretend Road"
      }, {
        "name": "PB Horizon 1500 Surround Sound System",
        "price": 1709,
        "taxPercentage": 15,
        "description": "Sleek design",
        "stock": 66,
        "warrantyPeriod": 1,
        "shippingCharges": 4,
        "soldBy": "ElectroMart",
        "sellerAddress": "Dreamland"
      }, {
        "name": "PB Solar 2400 Solar-Powered Portable Speaker",
        "price": 2398,
        "taxPercentage": 16,
        "description": "Portable and lightweight",
        "stock": 38,
        "warrantyPeriod": 2,
        "shippingCharges": 5,
        "soldBy": "ElectroMart",
        "sellerAddress": "Cityville"
      }, {
        "name": "PB Titan 360 Over-Ear DJ Headphones",
        "price": 2314,
        "taxPercentage": 16,
        "description": "Easy to use controls",
        "stock": 36,
        "warrantyPeriod": 2,
        "shippingCharges": 3,
        "soldBy": "TechDeals Inc.",
        "sellerAddress": "USA"
      }, {
        "name": "PB Nebula 910 True Wireless Sport Earbuds",
        "price": 2205,
        "taxPercentage": 11,
        "description": "Enhanced bass",
        "stock": 99,
        "warrantyPeriod": 2,
        "shippingCharges": 23,
        "soldBy": "SmartSolutions",
        "sellerAddress": "789 Faux Lane"
      }, {
        "name": "PB Quantum 550 Gaming Headphones",
        "price": 1666,
        "taxPercentage": 12,
        "description": "Noise-cancelling technology",
        "stock": 90,
        "warrantyPeriod": 2,
        "shippingCharges": 34,
        "soldBy": "GadgetGurus",
        "sellerAddress": "456 Mock Avenue"
      }, {
        "name": "PB FusionX 700 In-Ear Monitors",
        "price": 2261,
        "taxPercentage": 8,
        "description": "Water-resistant",
        "stock": 57,
        "warrantyPeriod": 1,
        "shippingCharges": 29,
        "soldBy": "ElectroMart",
        "sellerAddress": "321 Pretend Road"
      }, {
        "name": "PB Elevate 1125 Noise-Canceling Headphones",
        "price": 847,
        "taxPercentage": 8,
        "description": "Portable and lightweight",
        "stock": 86,
        "warrantyPeriod": 2,
        "shippingCharges": 3,
        "soldBy": "BestBuy Sellers",
        "sellerAddress": "789 Faux Lane"
      }, {
        "name": "PB Ignite 420 Bluetooth Earbuds",
        "price": 1041,
        "taxPercentage": 16,
        "description": "Comfortable fit",
        "stock": 26,
        "warrantyPeriod": 2,
        "shippingCharges": 31,
        "soldBy": "TechDeals Inc.",
        "sellerAddress": "Canada"
      }, {
        "name": "PB HarmonyX 1500 Home Theater System",
        "price": 2332,
        "taxPercentage": 12,
        "description": "Comfortable fit",
        "stock": 39,
        "warrantyPeriod": 2,
        "shippingCharges": 30,
        "soldBy": "BestBuy Sellers",
        "sellerAddress": "Townsville"
      }]
    productsData.forEach(async data => {
        console.log(data);
        await models.Product.create(data)
    })
    // var product1 = {name: 'PB Rockerz 260', price: 949}
    // var product2 = {name: 'PB Rockerz 255 Pro', price: 899}
    // var product3 = {name: 'PB Rockerz 235', price: 999}
    // var product4 = {name: 'PB Airpods 141', price: 1299}
    // await models.Product.create({
    //     name: product4.name, 
    //     price: product4.price, 
    //     taxPercentage: 18.0,
    //     stock: 1,
    //     warrantyPeriod: 1,
    //     shippingCharges: 49.0,
    //     soldBy: 'Seller1',
    //     sellerAddress: 'Chennai'
    // })
}

async function addProductToOrder() {
    OrderProduct.forEach(async data => {
        // console.log(data);
        const order = await models.Order.findByPk(data.OrderId)
        const product = await models.Product.findByPk(data.ProductId)
        console.log(data.OrderId);
        await order.addProduct(product, { through: { quantity: data.quantity } });    
    })
      
    // const order = await models.Order.findByPk(13)
    // const product = await models.Product.findByPk(16)
    // await order.addProduct(product, { through: { quantity: 1 } });    
}

async function addOrderToUser(){
    const user = await models.User.findByPk(2)
    const order = await models.Order.findByPk(4)
    await user.addOrder(order)
}

async function createOrderProduct(){
    // const data = [{
    //     "quantity": 1,
    //     "OrderId": 19,
    //     "ProductId": 25
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 15,
    //     "ProductId": 7
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 24,
    //     "ProductId": 15
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 9,
    //     "ProductId": 33
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 25,
    //     "ProductId": 12
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 2,
    //     "ProductId": 17
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 15,
    //     "ProductId": 29
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 5,
    //     "ProductId": 14
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 13,
    //     "ProductId": 20
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 1,
    //     "ProductId": 1
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 5,
    //     "ProductId": 41
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 10,
    //     "ProductId": 1
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 6,
    //     "ProductId": 32
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 12,
    //     "ProductId": 32
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 13,
    //     "ProductId": 5
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 1,
    //     "ProductId": 26
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 16,
    //     "ProductId": 4
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 12,
    //     "ProductId": 11
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 10,
    //     "ProductId": 37
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 25,
    //     "ProductId": 4
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 17,
    //     "ProductId": 1
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 21,
    //     "ProductId": 7
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 18,
    //     "ProductId": 3
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 17,
    //     "ProductId": 14
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 17,
    //     "ProductId": 37
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 17,
    //     "ProductId": 42
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 9,
    //     "ProductId": 23
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 20,
    //     "ProductId": 18
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 25,
    //     "ProductId": 23
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 24,
    //     "ProductId": 14
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 1,
    //     "ProductId": 16
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 12,
    //     "ProductId": 3
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 11,
    //     "ProductId": 33
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 12,
    //     "ProductId": 2
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 8,
    //     "ProductId": 24
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 10,
    //     "ProductId": 21
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 22,
    //     "ProductId": 16
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 13,
    //     "ProductId": 28
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 4,
    //     "ProductId": 31
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 14,
    //     "ProductId": 29
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 11,
    //     "ProductId": 32
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 23,
    //     "ProductId": 7
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 20,
    //     "ProductId": 25
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 16,
    //     "ProductId": 20
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 9,
    //     "ProductId": 26
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 7,
    //     "ProductId": 11
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 21,
    //     "ProductId": 28
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 2,
    //     "ProductId": 6
    //   }, {
    //     "quantity": 1,
    //     "OrderId": 15,
    //     "ProductId": 29
    //   }, {
    //     "quantity": 2,
    //     "OrderId": 16,
    //     "ProductId": 42
    //   }]
    // data.forEach(async d => {
    //     console.log(d);
    //     await models.OrderProduct.create(d);
    // })
    await models.OrderProduct.create({"quantity": 1, "OrderId": 15, "ProductId": 10});
      
}

async function main(){
    // await createOrder()
    // await createProduct()
    await addProductToOrder()
    // await getOrders()
    // await getProducts()
    // await addOrderToUser()
}

main()