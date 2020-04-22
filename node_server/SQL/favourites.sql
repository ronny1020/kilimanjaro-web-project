DROP TABLE IF EXISTS coffee.favourites;
CREATE TABLE coffee.favourites (
  favourtieID int ZEROFILL AUTO_INCREMENT PRIMARY KEY
  customerID varchar(5) NOT NULL,
  productID int(10) ZEROFILL NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

CREATE INDEX productID ON coffee.favourites (productID);

INSERT INTO coffee.favourites  VALUES (0000000001,'C001',0000164413),(0000000002,'C002',0000164415),(0000000003,'C002',0000164513);