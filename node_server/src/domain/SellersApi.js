class SellersApi {
  static getSellersApi() {
    let sql = `SELECT * FROM coffee.Sellers ORDER BY sellerID ASC;`
    return sql
  }

  static getProS001() {
    let sql = `SELECT * FROM coffee.products Where sellerID =  'S001'  ;`
    return sql
  }
  static getProS002() {
    let sql = `SELECT * FROM coffee.products Where sellerID =  'S002'  ;`
    return sql
  }
 
  
  
 
}

export default SellersApi
