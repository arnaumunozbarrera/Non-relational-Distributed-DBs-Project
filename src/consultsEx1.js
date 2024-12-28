db.geonames.createIndex({ "countrycode": 1 });

db.geonames.createIndex({ population: 1 });

db.geonames.find({ "countrycode": "ES" });

db.geonames.find(
  { population: { $gt: 5000000 } } 
)