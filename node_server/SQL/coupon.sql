DROP TABLE IF EXISTS coffee.coupon;
CREATE TABLE coffee.coupon (
  couponID int AUTO_INCREMENT PRIMARY KEY,-- Primary key:庫碰編號
  couponName varchar(20) collate utf8_unicode_ci NOT NULL,-- 庫碰名稱
  minus int NOT NULL, -- 扣除額
  limitation int, -- 折扣門檻
  cpendDate date default NULL, -- 過期時間
  used boolean
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

INSERT INTO coffee.coupon (couponName,minus,limitation,cpendDate)
 VALUES ('20元折抵',20,200,'2020-06-30'),
		('30元折抵',30,300,'2020-06-30'),
		('40元折抵',40,400,'2020-06-30'),
		('100元折抵',100,1000,'2020-06-30');



DROP TABLE IF EXISTS coffee.couponMap;
CREATE TABLE coffee.couponMap (
  couponMapId  int AUTO_INCREMENT PRIMARY KEY,-- Primary key:編號
  couponID int ,-- 庫碰編號
  customerID varchar(5) NOT NULL,-- 持有人
  valid boolean default 1,
  CONSTRAINT pair UNIQUE (couponID,customerID)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

INSERT INTO coffee.couponMap (couponID,customerID,valid)
 VALUES (1,'C001',true),(2,'C001',true),(1,'C002',true),(3,'C001',true),(3,'C002',true),(1,'C005',true),(1,'C003',false);

