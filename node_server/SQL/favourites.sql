DROP TABLE IF EXISTS coffee.favourites;
CREATE TABLE coffee.favourites (
  favouriteID int(10) AUTO_INCREMENT PRIMARY KEY,
  customerID varchar(5) NOT NULL,
  productID int(10) ZEROFILL NOT NULL,
  CONSTRAINT pair UNIQUE (productID,customerID)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

CREATE INDEX productID ON coffee.favourites (productID);

INSERT INTO coffee.favourites (customerID,productID) VALUES ('C001',0000164413),('C002',0000164415),('C002',0000164513);