DROP TABLE IF EXISTS coffee.comments;
CREATE TABLE coffee.comments (
  commentId INT AUTO_INCREMENT PRIMARY KEY,
  productID int(10) ZEROFILL NOT NULL,
  customerID varchar(5) NOT NULL,
  rate int(1),
  commentText MEDIUMTEXT,
  CONSTRAINT pair UNIQUE (productID,customerID)
  ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

INSERT INTO coffee.comments  (productID , customerID ,rate, commentText) VALUES 
(0000164413,'C001', 5 ,"great"),
(0000164415,'C001', 4 ,"good"),
(0000164513,'C001', 3 ,"It's OK...");