class Product {
  static getProduct() {
    let sql = `SELECT * FROM coffee.products Where productID= ? ;`
    return sql
  }
}

export default Product
