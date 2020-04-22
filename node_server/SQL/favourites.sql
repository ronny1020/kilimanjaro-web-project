DROP TABLE IF EXISTS coffee.favourites;
CREATE TABLE coffee.favourites (
  customerID varchar(5) NOT NULL,
  productID int(10) ZEROFILL NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

CREATE INDEX productID ON coffee.favourites (productID);

INSERT INTO coffee.favourites  VALUES ('C001',0000164413),('C001',0000164415),('C001',0000164513);