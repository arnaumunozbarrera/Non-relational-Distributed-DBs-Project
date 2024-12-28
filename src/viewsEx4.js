db.geonames.createIndex({ "countrycode": 1 })

db.geonames.createIndex({ population: 1 })

db.geonames.find({ "countrycode": "ES" }).explain("executionStats")

db.createView(
   "geonamesCountrycodeViewIndex", 
   "geonames",               
   [
      { $match: { countrycode: "ES" } } 
   ]
);

db.geonames.find(
  { population: { $gt: 5000000 } } 
).explain("executionStats")

db.createView(
   "geonamesPopulationViewIndex", 
   "geonames",               
   [
      { $match: { population: { $gt: 5000000 }} } 
   ]
);