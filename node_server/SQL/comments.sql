DROP TABLE IF EXISTS coffee.comments;
CREATE TABLE coffee.comments (
  commentId INT AUTO_INCREMENT PRIMARY KEY,
  productID int(10) ZEROFILL NOT NULL,
  customerID varchar(5) NOT NULL,
  rate int(1),
  addTime DATETIME  NOT NULL,
  commentText MEDIUMTEXT,
  CONSTRAINT pair UNIQUE (productID,customerID)
  ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

INSERT INTO coffee.comments  (productID , customerID ,addTime, rate, commentText) VALUES 
(0000164413,'C001', 5 ,'2020-05-09 10:10:00',"great"),
(0000164415,'C001', 4 ,'2020-04-09 10:10:00',"good"),
(0000164513,'C001', 3 ,'2019-05-09 10:10:00',"It's OK..."),
(0000164513,'C003', 3 ,'2019-06-09 10:10:00',"It's fantastic"),
(0000164513,'C004', 4 ,'2019-07-09 10:10:00',"It's OK..."),
(0000164513,'C005', 3 ,'2020-05-04 10:10:00',"It's fine"),
(0000164513,'C008', 5 ,'2020-04-03 10:10:00',"It's OK..."),
(0000164513,'C010', 5 ,'2020-03-09 10:10:00',"Perfect"),
(0000164513,'C012', 4 ,'2020-02-09 10:10:00',"good!!!"),
(0000164513,'C018', 2 ,'2020-01-09 10:10:00',"It's OK..."),
(0000164513,'C011', 1 ,'2019-11-09 10:10:00',"The Price is too high");