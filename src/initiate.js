rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "main.grup15.gabd:37017" },
    { _id: 1, host: "mongo-1.grup15.gabd:37017" },
    { _id: 2, host: "mongo-2.grup15.gabd:37017" }
  ]
});

rs.add("mongo-1.grup15.gabd:37017");

rs.add("mongo-2.grup15.gabd:37017");

rs.status();

rs.initiate({
  _id: "rs1",
  members: [
    { _id: 0, host: "main.grup15.gabd:47017" },
    { _id: 1, host: "mongo-1.grup15.gabd:47017" },
    { _id: 2, host: "mongo-2.grup15.gabd:47017" }
  ]
});

rs.add("mongo-1.grup15.gabd:47017");

rs.add("mongo-2.grup15.gabd:47017");

rs.status();

rs.initiate({
  _id: "configReplSet", 
  members: [
    { _id: 0, host: "main.grup15.gabd:57017" },
    { _id: 1, host: "mongo-1.grup15.gabd:57017" },
    { _id: 2, host: "mongo-2.grup15.gabd:57017" }
  ]
});

rs.add("mongo-1.grup15.gabd:57017");

rs.add("mongo-2.grup15.gabd:57017");

rs.status();

