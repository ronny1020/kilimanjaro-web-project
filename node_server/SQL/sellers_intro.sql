DROP TABLE IF EXISTS coffee.sellers_intro;
CREATE TABLE coffee.sellers_intro (
  selId INT AUTO_INCREMENT PRIMARY KEY,
  origin varchar(20) NOT NULL,
  hight varchar(20) NOT NULL,
  breed varchar(20) NOT NULL,
  quality varchar(20) NOT NULL,
  way varchar(20) NOT NULL,
  interest varchar(50) NOT NULL) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

INSERT INTO coffee.sellers_intro  (origin , hight ,breed, quality, way, interest) VALUES 
('肯亞涅里','1200公尺', 'SL-28、SL-34' ,"AA級以上","水洗法","蔗糖甜味帶出肯亞特有的烏梅酒香與黑醋栗般的尾韻。"),
('肯亞涅里','1200公尺', 'SL-28、SL-34' ,"AA級以上","水洗法","蔗糖甜味帶出肯亞特有的烏梅酒香與黑醋栗般的尾韻。"),
('肯亞涅里','1200公尺', 'SL-28、SL-34' ,"AA級以上","水洗法","蔗糖甜味帶出肯亞特有的烏梅酒香與黑醋栗般的尾韻。");