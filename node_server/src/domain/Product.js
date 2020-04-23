class Product {
  static getProduct() {
    let sql = `SELECT * FROM coffee.products Where productID in ( ? ) ;`
    return sql
  }

  static getProductTags() {
    let sql = `SELECT tagName FROM coffee.products_tagMap
    JOIN coffee.products ON coffee.products.productID=coffee.products_tagMap.productID
    JOIN coffee.products_tags ON coffee.products_tags.tagID=coffee.products_tagMap.tagID
    WHERE coffee.products.productID = ? ORDER BY tagName;`
    return sql
  }

  static getVisitedTimes() {
    let sql =' SELECT count(0) num FROM coffee.product_visited Where productID= ? ;'
    return sql
  }
}

export default Product
