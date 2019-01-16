USE hot_restaurant;

-- Creates the table "people" within animals_db --
CREATE TABLE restraunts (
  restraunt_id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  restraunt_name varchar(50) NOT NULL,
  food_type varchar(50),
  price_range INTEGER(10) NOT NULL,
  PRIMARY KEY(restraunt_id)
  );
  
INSERT INTO restraunts (restraunt_name,food_type,price_range) VALUES ("Wemdy's", "fast food", 1);
INSERT INTO restraunts (restraunt_name,food_type,price_range) VALUES ("Burger King", "fast food", 1);
INSERT INTO restraunts (restraunt_name,food_type,price_range) VALUES ("Pizza Hut", "pizza", 1);
INSERT INTO restraunts (restraunt_name,food_type,price_range) VALUES ("India Hosue", "indian", 2);
INSERT INTO restraunts (restraunt_name,food_type,price_range) VALUES ("Franklin's", "bbq", 2);
INSERT INTO restraunts (restraunt_name,food_type,price_range) VALUES ("North Italia", "italian", 2);
INSERT INTO restraunts (restraunt_name,food_type,price_range) VALUES ("Uuchi", "sushi", 3);


