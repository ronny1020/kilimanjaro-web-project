DROP TABLE IF EXISTS coffee.coupon;
CREATE TABLE coffee.coupon (
  couponID int AUTO_INCREMENT PRIMARY KEY,-- Primary key:庫碰編號
  couponName varchar(20) collate utf8_unicode_ci NOT NULL,-- 庫碰名稱
  productID int(10) ZEROFILL NOT NULL,-- 對應商品
  customerID varchar(5) NOT NULL,-- 持有人
  minus int(2) ZEROFILL NOT NULL,-- 扣除額
  cpendDate date default NULL, -- 過期時間
  CONSTRAINT pair UNIQUE (productID,customerID)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

CREATE INDEX productID ON coffee.coupon (productID);

INSERT INTO coffee.coupon (couponName,productID,customerID,minus,cpendDate) VALUES ('20元折抵',0000164413,20,'C001','2020-06-30'),('20元折抵',0000164415,20,'C001','2020-06-30'),('20元折抵',0000164513,20,'C001','2020-06-30');