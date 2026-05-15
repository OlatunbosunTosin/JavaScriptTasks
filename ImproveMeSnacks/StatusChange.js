function statusChange(order){

    order.status = "delivered";

    return order;

}

const order = {id: 1,status: "pending"}; 
console.log(statusChange(order));


