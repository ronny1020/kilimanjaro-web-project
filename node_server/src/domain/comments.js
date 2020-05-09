class Comments {
  static getComments() {
    let sql = `SELECT * FROM coffee.comments where productID = ? ;`
    return sql
  }

  static postComment() {
    let sql = `INSERT INTO coffee.comments  (productID , customerID ,rate ,addTime ,commentText ) VALUES  ( ? , ? , ?, ? , ? );`
    return sql
  }

  static putComment() {
    let sql = `UPDATE coffee.comments SET rate = ?, commentText = ? WHERE productID = ? and customerID = ? ;`
    return sql
  }

  static deleteComment() {
    let sql = `DELETE FROM coffee.comments where customerID= ? and productID= ? ;`
    return sql
  }
}

export default Comments
