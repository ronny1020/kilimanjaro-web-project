class MemberList {
  static getMemberList() {
    let sql = `SELECT * FROM coffee.customers ORDER BY customerID ASC;`
    return sql
  }
}

export default MemberList
