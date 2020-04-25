class Cart {
  static getCart() {
    let sql = `SELECT * FROM coffee.cart 
    JOIN coffee.products ON coffee.products.productID=coffee.cart.productID
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
