class ProductList {
  static getProductList() {
    let sql = `SELECT products.productID, ProductName, products.sellerID, sName, CategoryID, UnitPrice, UnitsInStock, add_time, specification, description, cartID, cart.customerID, num ,favouriteID
    , disID, discount, disName, disDescrip, startDate, overDate , IFNULL(if(UnitPrice-discount<0, 0 ,UnitPrice-discount),UnitPrice) finalPrice, visitedTimes, sellingVolume
    FROM coffee.products 
    left JOIN coffee.cart ON coffee.products.productID=coffee.cart.productID and  cart.customerID = ?
    left JOIN coffee.favourites ON coffee.products.productID=coffee.favourites.productID and  favourites.customerID = ?
    Join coffee.sellers ON sellers.sellerID = products.sellerID
    left JOIN
    (SELECT discount_detail.disID, productID, max(disPrice) as discount, disName, disDescrip,  startDate, overDate 
    FROM coffee.discount_detail 
    JOIN coffee.discounts ON discount_detail.disID= discounts.disID and overDate > NOW() group by productID) d 
    on products.productID=d.productID
    left JOIN (select count(0) visitedTimes, productID, time_stamp FROM coffee.product_visited group by productID) v
    on products.productID=v.productID
    left JOIN (SELECT sum(Quantity) sellingVolume ,productID FROM coffee.orders_detail join coffee.orders 
    on orders.OrderID = orders_detail.OrderID group by productID) s
    on products.productID=s.productID
    ORDER BY products.productID DESC LIMIT ? , ? ;`

    return sql
  }
}

export default ProductList
