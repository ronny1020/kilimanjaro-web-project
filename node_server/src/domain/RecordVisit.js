class RecordVisit {
    static postRecordVisit() {
      let sql = `INSERT INTO coffee.product_visited  (productID, customerID,time_stamp) VALUES (?,?,?);`
      return sql
    }
  }
  
  export default RecordVisit
  