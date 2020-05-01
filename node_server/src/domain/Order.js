class Order {
  static getOrder() {
    let sql = `SELECT * FROM coffee.orders
    join coffee.shippingMethod on orders.ShippingMethodID = shippingMethod.ShippingMethodID
    join coffee.paymentMethod on orders.paymentMethodID = paymentMethod.paymentMethodID
    join coffee.invoiceMethod on orders.invoiceMethodID = invoiceMethod.invoiceMethodID
    where CustomerID = ? ;`
    return sql
  }

  static getOrderDetail(){
    let sql = `SELECT * FROM coffee.orders_detail 
    join coffee.products on orders_detail.productID = products.productID
    where OrderID = ?  ;`
    return sql
  }

  static postOrder() {
    let sql = `INSERT INTO coffee.orders (CustomerID, OrderDate, ShippingMethodID, Freight, PaymentMethodID, InvoiceMethodID,
      RecipientName, RecipientAddress, RecipientMobile, couponMapId, rewardsPoints, valid) VALUES 
      ( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? ,true );`
    return sql
  }


  static postOrderDetail() {
    let sql = `INSERT INTO coffee.orders_detail (orderID, productID, Quantity, OrderPrice) VALUES
    (?, ?, ?, ?);`
    return sql
  }


  static CancelOrder() {
    let sql = ``
    return sql
  }
}

export default Order
