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

INSERT INTO coffee.comments  (productID , customerID , rate , addTime , commentText) VALUES 
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
(0000164513,'C011', 1 ,'2019-11-09 10:10:00',"The Price is too high"),
(0000164439,'C011', 3 ,'2019-11-09 10:10:00',"太貴了"),
(0000164439,'C009', 5 ,'2019-12-09 10:10:00',"超棒的，
CP值超高。"),
(0000164439,'C002', 5 ,'2019-12-09 10:10:00',"很不錯，
我朋友都很喜歡。"),
(0000164439,'C003', 4 ,'2019-02-09 10:10:00',"之前常常喝這個，
口味很不錯，
就是價格有點小貴。
"),
(0000164439,'C005', 4 ,'2019-12-10 10:10:00',"咖啡香味很棒，
酸度也剛好，
相當不錯的一款咖啡。
"),
(0000164439,'C008', 5 ,'2019-12-20 10:10:00',"超棒的，
還不快買爆"),
(0000164439,'C018', 3 ,'2019-12-19 10:10:00',"可是我覺得很普通，
也不是說很差，
就是普普的");