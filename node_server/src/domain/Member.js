class Member {
  static getMember() {
    let sql = `SELECT * FROM coffee.CUSTOMERS Where customerID= ? ;`
    return sql
  }
}

export default Member
