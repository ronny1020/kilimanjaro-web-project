class SellersApi {
  static getSellersApi() {
    let sql = `SELECT * FROM coffee.Sellers ORDER BY sellerID ASC;`
    return sql
  }
}

export default SellersApi
