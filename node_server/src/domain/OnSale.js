class OnSale {
  static getOnSale() {
    let sql = `SELECT * FROM coffee.couponmap ORDER BY couponID ASC;`
    return sql
  }
}

export default OnSale
