-- table訂單: orders
-- 刪除已存在之重複table
DROP TABLE IF EXISTS coffee.orders;
CREATE TABLE coffee.orders(
  OrderID int AUTO_INCREMENT PRIMARY KEY,-- Primary key:流水號
  CustomerID varchar(5) NOT NULL,-- 買家
  OrderDate DATETIME NOT NULL, -- 下單日期
  ShippedDate DATETIME, -- 運送日期
  ShippingMethodID int NOT NULL,  -- 參照ShippingMethod的配送方式
  Freight int NOT NULL,     -- 運費
  PaymentMethodID int NOT NULL,  -- 參照PaymentMethod表的付款方式
  InvoiceMethodID int NOT NULL, -- 參照InvoiceMethod表的發票方式
  RecipientName varchar(20) collate utf8_unicode_ci NOT NULL, -- 收件人姓名
  RecipientAddress varchar(60) NOT NULL, -- 收件人地址
  RecipientMobile varchar(24) NOT NULL, -- 收件人手機
  couponMapId int, -- 使用的優惠券
  rewardsPoints int, -- 使用的紅利點數
  valid boolean -- 若被取消設為fault
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 預設儲存引擎: InnoDB(after php5.5)

-- add dummy datas:
INSERT INTO coffee.orders (CustomerID, OrderDate, ShippedDate, ShippingMethodID, Freight, PaymentMethodID, InvoiceMethodID,
RecipientName, RecipientAddress, RecipientMobile, couponMapId, rewardsPoints, valid) VALUES 
('C001', '2020-04-29 17:00:00', '2020-04-30 17:00:00',  1, 0, 1, 1, 'Tom', 'Taipei','0937200000',null ,0 ,true ),
('C002', '2020-04-30 17:00:00', '2020-05-01 17:00:00',  1, 0, 2, 1, 'John', 'Taipei','0937200000',null ,0 ,true ),
('C002', '2020-04-29 17:00:00', '2020-05-01 17:00:00',  1, 0, 1, 2, 'John', 'Taipei','0937200000',null ,0 ,true ),
('C002', '2020-05-02 17:00:00', null ,  1, 0, 1, 2, 'John', 'Taipei','0937200000',null ,0 ,true );



DROP TABLE IF EXISTS coffee.ShippingMethod;
CREATE TABLE coffee.ShippingMethod (
  ShippingMethodID int  AUTO_INCREMENT  PRIMARY KEY, 
  ShippingMethodName varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO coffee.ShippingMethod (ShippingMethodName) VALUES 
('7-11取貨'),
('宅配到府');

DROP TABLE IF EXISTS coffee.PaymentMethod;
CREATE TABLE coffee.PaymentMethod (
  PaymentMethodID int  AUTO_INCREMENT  PRIMARY KEY, 
  PaymentMethodName varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO coffee.PaymentMethod (PaymentMethodName) VALUES 
('7-11取貨付款'),
('ATM付款'),
('線上刷卡');

DROP TABLE IF EXISTS coffee.InvoiceMethod;
CREATE TABLE coffee.InvoiceMethod (
  InvoiceMethodID int  AUTO_INCREMENT  PRIMARY KEY, 
  InvoiceMethodName varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO coffee.InvoiceMethod (InvoiceMethodName) VALUES 
('捐贈發票'),
('二聯電子發票'),
('三聯電子發票');


-- table訂單詳細: orders_detail
-- 刪除已存在之重複table
DROP TABLE IF EXISTS coffee.orders_detail;
CREATE TABLE coffee.orders_detail (
  OrderID varchar(5) NOT NULL default '',-- Primary key:流水號(訂單)
  productID int(10) ZEROFILL,
  Quantity smallint(6) NOT NULL ,-- 數量
  OrderPrice int NOT NULL -- 訂購價格
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 預設儲存引擎: InnoDB(after php5.5)

-- add dummy datas:
INSERT INTO coffee.orders_detail (orderID, productID, Quantity, OrderPrice) VALUES
(1, 0000164493, 49, 10),
(1, 0000165302, 15, 80),
(2, 0000164428, 30, 69),
(1, 0000164449, 36, 21),
(1, 0000165364, 42, 17),
(2, 0000164817, 35, 97),
(1, 0000164448, 25, 42),
(3, 0000164564, 3, 95),
(2, 0000165412, 30, 56);