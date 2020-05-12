class Comments {
  static getComments() {
    let sql = `SELECT * FROM coffee.comments
    join customers on comments.customerID = customers.customerID
    where productID = ? order by addTime desc;`
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
