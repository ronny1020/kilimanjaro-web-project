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
  static getProS003() {
    let sql = `SELECT * FROM coffee.products Where sellerID =  'S003'  ;`
    return sql
  }
  static getProS004() {
    let sql = `SELECT * FROM coffee.products Where sellerID =  'S004'  ;`
    return sql
  }
  static getProS005() {
    let sql = `SELECT * FROM coffee.products Where sellerID =  'S005'  ;`
    return sql
  }
  
  
  
 
}

export default SellersApi
