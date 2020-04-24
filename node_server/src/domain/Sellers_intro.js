class sellers_intro {
    static getsellers_intro() {
      let sql = `SELECT * FROM coffee.Sellers_intro Where selId= ? ;`
      return sql
      
    }
  }
  
  export default sellers_intro