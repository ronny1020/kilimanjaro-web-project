class Product {
  static getProduct() {
    let sql = `SELECT products.productID, ProductName, products.sellerID, sName, products.CategoryID, categoryName, UnitPrice, UnitsInStock, add_time, specification, description, cartID, cart.customerID, num ,favouriteID
    , disID, discount, disName, disDescrip, startDate, overDate , IFNULL(if(UnitPrice-discount<0, 0 ,UnitPrice-discount),UnitPrice) finalPrice, visitedTimes, sellingVolume, avgRate, countComment
    FROM coffee.products 
    left join coffee.category on category.categoryID=products.categoryID
    left JOIN coffee.cart ON coffee.products.productID=coffee.cart.productID and  cart.customerID = ?
    left JOIN coffee.favourites ON coffee.products.productID=coffee.favourites.productID and  favourites.customerID = ?
    Join coffee.sellers ON sellers.sellerID = products.sellerID
    left JOIN (SELECT productId, avg(rate) avgRate ,count(commentText) countComment FROM coffee.comments group by productID) c
    on products.productID=c.productID
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
    Where products.productID =  ?  ;`
    return sql
  }

  static getProductTags() {
    let sql = `SELECT tagName FROM coffee.products_tagMap
    JOIN coffee.products ON coffee.products.productID=coffee.products_tagMap.productID
    JOIN coffee.products_tags ON coffee.products_tags.tagID=coffee.products_tagMap.tagID
    WHERE coffee.products.productID = ? ORDER BY tagName;`
    return sql
  }

  static getVisitedTimes() {
    let sql =
      ' SELECT count(0) num FROM coffee.product_visited Where productID= ? ;'
    return sql
  }
}

export default Product
