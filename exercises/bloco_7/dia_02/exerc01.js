const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            margherita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};


const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson}` + 
    `entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    let newName = 'John';
    let newPizza1 = 20;
    let newPizza2 = 15;

    order.name = newName;
    order.order.pizza.margherita.price = newPizza1;
    order.order.pizza.pepperoni.price = newPizza2;
    let total = order.order.pizza.margherita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price + order.order.delivery.price;
    order.payment.total = total;
    
    console.log(`Olá ${order.name}, o total do seu pedido de ` + 
    `${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`);
}

orderModifier(order);

// Object.entries(obj).forEach(([key, val]) => {
//     if (val && typeof val === "object") {
//         customerInfo(val); // recurse.
//     } else {
//         console.log(key, val); // or do something with key and val.
//     }
// });
