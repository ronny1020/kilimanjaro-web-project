class Sellers_introList {
  static getSellers_introList() {
    let sql = `SELECT * FROM coffee.Sellers_intro ORDER BY selId ASC;`
    return sql
  }
}

export default Sellers_introList
