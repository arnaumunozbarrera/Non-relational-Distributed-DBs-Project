db.geonames.createIndex({ "countrycode": 1 });

db.geonames.createIndex({ population: 1 });

db.geonames.find({ "countrycode": "ES" }).explain("executionStats")

db.geonames.find(
  { population: { $gt: 5000000 } } 
).explain("executionStats")

db.geonames.dropIndex("countrycode_1");
db.geonames.dropIndex("population_1");

db.geonames.find({ "countrycode": "ES" }).explain("executionStats")

db.geonames.find(
  { population: { $gt: 5000000 } } 
).explain("executionStats")



