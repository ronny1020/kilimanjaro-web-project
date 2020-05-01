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
    let sql = `SELECT * FROM coffee.orders_detail where OrderID = ?  ;`
    return sql
  }

  static postOrder() {
    let sql = ``
    return sql
  }

  static CancelOrder() {
    let sql = ``
    return sql
  }
}

export default Order
