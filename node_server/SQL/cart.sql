DROP TABLE IF EXISTS coffee.cart;
CREATE TABLE coffee.cart (
  customerID varchar(5) NOT NULL,
  productID int(10) ZEROFILL NOT NULL,
  num int(10) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

CREATE INDEX customerID ON coffee.Cart (productID);

INSERT INTO coffee.Cart  VALUES ('C001',0000164413,2),('C001',0000164415,1),('C001',0000164513,5);