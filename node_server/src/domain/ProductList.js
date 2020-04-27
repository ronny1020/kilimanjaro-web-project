class ProductList {
  static getProductList() {
    let sql = `SELECT products.productID, ProductName, sellerID, CategoryID, UnitPrice, UnitsInStock, add_time, specification, description, cartID, cart.customerID, num ,favouriteID
    FROM coffee.products 
    left JOIN coffee.cart ON coffee.products.productID=coffee.cart.productID and  cart.customerID = ?
    left JOIN coffee.favourites ON coffee.products.productID=coffee.favourites.productID and  favourites.customerID = ?
    ORDER BY products.productID DESC LIMIT ? , ? ;`

    return sql
  }
}

export default ProductList
