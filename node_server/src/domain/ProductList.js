import database from '../db/database.js'

class ProductList {
  static async conditionCreator(query) {
    const condition = {
      main: 'Where ',
      orderBy: query.orderBy ? query.orderBy : 'add_time DESC',
      visitedTimesPeriod: '',
      sellingVolumePeriod: '',
      commentPeriod: '',
    }
    if (query.orderBy === 'visitedTimes DESC')
      condition.visitedTimesPeriod = query.period
        ? `where time_stamp > DATE_SUB(NOW(),INTERVAL ${query.period})`
        : ''
    if (query.orderBy === 'sellingVolume DESC')
      condition.sellingVolumePeriod = query.period
        ? `and OrderDate > DATE_SUB(NOW(),INTERVAL ${query.period})`
        : ''
    if (
      query.orderBy === 'avgRate DESC' ||
      query.orderBy === 'countComment DESC'
    )
      condition.commentPeriod = query.period
        ? `where addTime > DATE_SUB(NOW(),INTERVAL ${query.period})`
        : ''

    const column = query.column ? query.column : 'ProductName'
    query.column === 'tag'
    if (column === 'tag' && query.keyword) {
      async function getIdList() {
        const [idList, error] = await database.promisePool.query(
          `SELECT * FROM coffee.products_tagmap 
         join coffee.products on products.productID = products_tagmap.productID
         join coffee.products_tags on products_tags.tagID = products_tagmap.tagID
         where tagName like '%${query.keyword}%';`
        )

        if (idList.length !== 0) {
          let idString = ''
          idList.forEach(id => {
            idString = idString + id.productID + ' ,'
          })
          idString = idString.substr(0, idString.length - 1)

          return ` products.productID in (${idString})`
        } else {
          return `products.productID in ('X')`
        }
      }
      const productsWithTag = await getIdList()
      condition.main = productsWithTag
        ? condition.main + productsWithTag + ' and '
        : condition.main
    } else {
      const table = column == 'sName' ? 'sellers' : 'products'
      condition.main = query.keyword
        ? condition.main +
          `${table}.${column} like '%${query.keyword}%'` +
          ' and '
        : condition.main
    }
    condition.main = query.sellerID
      ? condition.main + `products.sellerID = '${query.sellerID}'` + ' and '
      : condition.main

    condition.main = query.category
      ? condition.main + `products.CategoryID = '${query.category}'` + ' and '
      : condition.main

    condition.main = query.priceRangeFrom
      ? condition.main +
        `IFNULL(if(UnitPrice-discount<0, 0 ,UnitPrice-discount),UnitPrice) >= '${query.priceRangeFrom}'` +
        ' and ' +
        `IFNULL(if(UnitPrice-discount<0, 0 ,UnitPrice-discount),UnitPrice) <= '${query.priceRangeTo}'` +
        ' and '
      : condition.main

    condition.main =
      query.rate && query.rate !== 'null'
        ? condition.main + `avgRate > '${query.rate}'` + ' and '
        : condition.main

    if (condition.main === 'Where ') {
      condition.main = ''
    } else {
      condition.main = condition.main.substr(0, condition.main.length - 4)
    }
    return condition
  }

  static async getProductList(query) {
    let condition = await this.conditionCreator(query)
    let sql = `SELECT products.productID, ProductName, products.sellerID, sName, products.CategoryID, categoryName, UnitPrice, UnitsInStock, add_time, specification, description, cartID, cart.customerID, num ,favouriteID
    , disID, discount, disName, disDescrip, startDate, overDate , IFNULL(if(UnitPrice-discount<0, 0 ,UnitPrice-discount),UnitPrice) finalPrice, visitedTimes, sellingVolume, avgRate, countComment
    FROM coffee.products 
    left join coffee.category on category.categoryID=products.categoryID
    left JOIN coffee.cart ON coffee.products.productID=coffee.cart.productID and  cart.customerID = ?
    left JOIN coffee.favourites ON coffee.products.productID=coffee.favourites.productID and  favourites.customerID = ?
    Join coffee.sellers ON sellers.sellerID = products.sellerID
    left JOIN (SELECT productId, avg(rate) avgRate ,count(commentText) countComment FROM coffee.comments ${condition.commentPeriod} group by productID) c
    on products.productID=c.productID
    left JOIN
    (SELECT discount_detail.disID, productID, max(disPrice) as discount, disName, disDescrip,  startDate, overDate 
    FROM coffee.discount_detail 
    JOIN coffee.discounts ON discount_detail.disID= discounts.disID and overDate > NOW() group by productID) d 
    on products.productID=d.productID
    left JOIN (select count(0) visitedTimes, productID, time_stamp FROM coffee.product_visited ${condition.visitedTimesPeriod} group by productID) v
    on products.productID=v.productID
    left JOIN (SELECT sum(Quantity) sellingVolume ,productID FROM coffee.orders_detail join coffee.orders 
    on orders.OrderID = orders_detail.OrderID ${condition.sellingVolumePeriod}  group by productID) s
    on products.productID=s.productID
    ${condition.main} ORDER BY ${condition.orderBy} LIMIT ? , ? ;`
    return sql
  }

  static async getProductListRowsNum(query) {
    let condition = await this.conditionCreator(query)
    let sql = `SELECT COUNT(0) num 
    FROM coffee.products 
    Join coffee.sellers ON sellers.sellerID = products.sellerID
    left JOIN (SELECT productId, avg(rate) avgRate ,count(commentText) countComment FROM coffee.comments ${condition.commentPeriod} group by productID) c
    on products.productID=c.productID
    left JOIN
    (SELECT discount_detail.disID, productID, max(disPrice) as discount, disName, disDescrip,  startDate, overDate 
    FROM coffee.discount_detail 
    JOIN coffee.discounts ON discount_detail.disID= discounts.disID and overDate > NOW() group by productID) d 
    on products.productID=d.productID
    left JOIN (select count(0) visitedTimes, productID, time_stamp FROM coffee.product_visited ${condition.visitedTimesPeriod} group by productID) v
    on products.productID=v.productID
    left JOIN (SELECT sum(Quantity) sellingVolume ,productID FROM coffee.orders_detail join coffee.orders 
    on orders.OrderID = orders_detail.OrderID ${condition.sellingVolumePeriod}  group by productID) s
    on products.productID=s.productID
    ${condition.main} ;`
    return sql
  }
}

export default ProductList
