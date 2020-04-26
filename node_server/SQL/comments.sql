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
(0000164513,'C001', 3 ,"It's OK..."),
(0000164513,'C003', 3 ,"It's fantastic"),
(0000164513,'C004', 4 ,"It's OK..."),
(0000164513,'C005', 3 ,"It's fine"),
(0000164513,'C008', 5 ,"It's OK..."),
(0000164513,'C010', 5 ,"Perfect"),
(0000164513,'C012', 4 ,"good!!!"),
(0000164513,'C018', 2 ,"It's OK..."),
(0000164513,'C011', 1 ,"The Price is too high");