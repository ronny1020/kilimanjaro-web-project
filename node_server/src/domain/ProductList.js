class ProductList {
  static getProductList() {
    let sql = `SELECT * FROM coffee.products ORDER BY productID DESC LIMIT 20;`
    return sql
  }
}

export default ProductList
