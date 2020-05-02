class Order {
  static getOrders() {
    let sql = `SELECT * FROM coffee.orders
    join coffee.shippingMethod on orders.ShippingMethodID = shippingMethod.ShippingMethodID
    join coffee.paymentMethod on orders.paymentMethodID = paymentMethod.paymentMethodID
    join coffee.invoiceMethod on orders.invoiceMethodID = invoiceMethod.invoiceMethodID
    where CustomerID = ? ;`
    return sql
  }

  static getOrderDetail() {
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

  static UpdateProductStock() {
    let sql = `UPDATE coffee.products SET UnitsInStock = UnitsInStock + ( ? )  where productID = ? ;`
    return sql
  }

  static UpdateCouponValid() {
    let sql = `UPDATE coffee.couponMap SET valid= ?  where couponMapId = ? ;`
    return sql
  }

  static UpdateCustomerRewardsPoints() {
    let sql = `UPDATE coffee.customers SET rewardsPoints = rewardsPoints + ( ? )  where customerID = ? ;`
    return sql
  }

  static CancelOrder() {
    let sql = `UPDATE coffee.orders SET valid= ?  where orderID = ? ;`
    return sql
  }

  static getOrder() {
    let sql = `SELECT * FROM coffee.orders where orderID = 1;`
    return sql
  }
}


export default Order
