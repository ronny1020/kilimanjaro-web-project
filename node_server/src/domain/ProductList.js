class ProductList {
  static getProductList() {
    let sql = `SELECT products.productID, ProductName, sellerID, CategoryID, UnitPrice, UnitsInStock, add_time, specification, description, cartID, cart.customerID, num ,favouriteID
    , disID, discount, disName, disDescrip, startDate, overDate 
    FROM coffee.products 
    left JOIN coffee.cart ON coffee.products.productID=coffee.cart.productID and  cart.customerID = ?
    left JOIN coffee.favourites ON coffee.products.productID=coffee.favourites.productID and  favourites.customerID = ?
    left JOIN
    (SELECT discount_detail.disID, productID, max(disPrice) as discount, disName, disDescrip,  startDate, overDate 
    FROM coffee.discount_detail 
    JOIN coffee.discounts ON discount_detail.disID= discounts.disID and overDate > NOW() group by productID) d
    on products.productID=d.productID
    ORDER BY products.productID DESC LIMIT ? , ? ;`

    return sql
  }
}

export default ProductList
