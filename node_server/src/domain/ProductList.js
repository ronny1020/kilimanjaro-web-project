class ProductList {
  static getProductList() {
    let sql = `SELECT products.productID, ProductName, sellerID, CategoryID, UnitPrice, UnitsInStock, add_time, specification, description, cartID, customerID, num 
    FROM coffee.products 
    left JOIN coffee.cart ON coffee.products.productID=coffee.cart.productID and  customerID = ?
    ORDER BY products.productID DESC LIMIT ? , ? ;`
    return sql
  }
}

export default ProductList
