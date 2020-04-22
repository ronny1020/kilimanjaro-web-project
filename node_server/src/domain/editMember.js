class editMember {
  static geteditMember() {
    let sql = `UPDATE coffee.CUSTOMERS Where customerID= ? ;`
    return sql
  }
}

export default editMember
