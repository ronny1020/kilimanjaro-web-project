class Comments {
  static getComments() {
    let sql = `SELECT * FROM coffee.comments where productID = ? ;`
    return sql
  }
}
export default Comments
