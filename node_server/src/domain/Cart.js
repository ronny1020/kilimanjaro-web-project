class Cart {
  static getCart() {
    let sql = `SELECT products.productID, ProductName, sellerID, CategoryID, UnitPrice, UnitsInStock, add_time, specification, description, cartID, cart.customerID, num ,
    disID, discount, disName, disDescrip, startDate, overDate 
    FROM coffee.cart 
    JOIN coffee.products ON coffee.products.productID=coffee.cart.productID
    left JOIN
    (SELECT discount_detail.disID, productID, max(disPrice) as discount, disName, disDescrip,  startDate, overDate 
    FROM coffee.discount_detail 
    JOIN coffee.discounts ON discount_detail.disID= discounts.disID and overDate > NOW() group by productID) d
    on products.productID=d.productID
    where customerID = ? ;`
    return sql
  }

  static getCartNum() {
    let sql =
      ' SELECT count(0) num FROM coffee.cart Where customerID = ? ;'
    return sql
  }

  static postCart() {
    let sql = `INSERT INTO coffee.Cart (customerID,productID,num)  VALUES (? , ? , ? );`
    return sql
  }

  static deleteCart() {
    let sql = `DELETE FROM coffee.cart where customerID= ? and productID= ? ;`
    return sql
  }
  static deleteAllCart() {
    let sql = `DELETE FROM coffee.cart where customerID= ?;`
    return sql
  }

  static putCart() {
    let sql = `UPDATE coffee.cart SET num = ? where customerID= ? and productID = ? ;`
    return sql
  }

}

export default Cart
