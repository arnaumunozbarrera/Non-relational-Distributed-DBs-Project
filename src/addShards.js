sh.addShard(
    "rs0/main.grup15.gabd:37017,mongo-1.grup15.gabd:37017,mongo-2.grup15.gabd:37017");
    
sh.addShard(
    "rs1/main.grup15.gabd:47017,mongo-1.grup15.gabd:47017,mongo-2.grup15.gabd:47017");
    
sh.status();
    
sh.enableSharding("GABD");

sh.shardCollection("GABD.geonames", { countrycode: 1});