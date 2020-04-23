class Cart {
  static getCart() {
    let sql = `SELECT * FROM coffee.cart 
    JOIN coffee.products ON coffee.products.productID=coffee.cart.productID
    where customerID = ? ;`
    return sql
  }
}

export default Cart
