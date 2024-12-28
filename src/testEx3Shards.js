sh.status();

// Output:

// {
// 	"shardingVersion" : {
// 		"_id" : 1,
// 		"clusterId" : ObjectId("676d92b5d2d3a29a711310e3")
// 	},
// 	"shards" : [
// 		{
// 			"_id" : "rs0",
// 			"host" : "rs0/main.grup15.gabd:37017,mongo-1.grup15.gabd:37017,mongo-2.grup15.gabd:37017",
// 			"state" : 1,
// 			"topologyTime" : Timestamp({ t: 1735295617, i: 1 })
// 		},
// 		{
// 			"_id" : "rs1",
// 			"host" : "rs1/main.grup15.gabd:47017,mongo-1.grup15.gabd:47017,mongo-2.grup15.gabd:47017",
// 			"state" : 1,
// 			"topologyTime" : Timestamp({ t: 1735295626, i: 4 })
// 		}
// 	],
// 	"active mongoses" : [
// 		{
// 			"7.0.14" : 1
// 		}
// 	],
// 	"autosplit" : {
// 		"Currently enabled" : "yes"
// 	},
// 	"balancer" : {
// 		"Currently enabled" : "yes",
// 		"Currently running" : "no",
// 		"Failed balancer rounds in last 5 attempts" : 0,
// 		"Migration Results for the last 24 hours" : "No recent migrations"
// 	},
// 	"databases" : [
// 		{
// 			"database" : {
// 				"_id" : "config",
// 				"primary" : "config",
// 				"partitioned" : true
// 			},
// 			"collections" : {
// 				"config.system.sessions" : {
// 					"shardKey" : {
// 						"_id" : 1
// 					},
// 					"unique" : false,
// 					"balancing" : true,
// 					"chunkMetadata" : [
// 						{
// 							"shard" : "rs0",
// 							"nChunks" : 1
// 						}
// 					],
// 					"chunks" : [
// 						{
// 							"min" : {
// 								"_id" : MinKey()
// 							},
// 							"max" : {
// 								"_id" : MaxKey()
// 							},
// 							"on shard" : "rs0",
// 							"last modified" : Timestamp({ t: 1, i: 0 })
// 						}
// 					],
// 					"tags" : [ ]
// 				}
// 			}
// 		},
// 		{
// 			"database" : {
// 				"_id" : "GABD",
// 				"primary" : "rs1",
// 				"partitioned" : false,
// 				"version" : {
// 					"uuid" : UUID("1ea48859-3273-48f6-ae89-5af4e67dc896"),
// 					"timestamp" : Timestamp({ t: 1735296078, i: 1 }),
// 					"lastMod" : 1
// 				}
// 			},
// 			"collections" : {
// 				"GABD.geonames" : {
// 					"shardKey" : {
// 						"countrycode" : 1
// 					},
// 					"unique" : false,
// 					"balancing" : true,
// 					"chunkMetadata" : [
// 						{
// 							"shard" : "rs1",
// 							"nChunks" : 1
// 						}
// 					],
// 					"chunks" : [
// 						{
// 							"min" : {
// 								"countrycode" : MinKey()
// 							},
// 							"max" : {
// 								"countrycode" : MaxKey()
// 							},
// 							"on shard" : "rs1",
// 							"last modified" : Timestamp({ t: 1, i: 0 })
// 						}
// 					],
// 					"tags" : [ ]
// 				}
// 			}
// 		},
// 		{
// 			"database" : {
// 				"_id" : "Practica_3",
// 				"primary" : "rs0",
// 				"partitioned" : false,
// 				"version" : {
// 					"uuid" : UUID("a6e99c75-0f31-46ab-b075-76d72d48e61f"),
// 					"timestamp" : Timestamp({ t: 1735295617, i: 1 }),
// 					"lastMod" : 1
// 				}
// 			},
// 			"collections" : {
				
// 			}
// 		},
// 		{
// 			"database" : {
// 				"_id" : "test",
// 				"primary" : "rs1",
// 				"partitioned" : false,
// 				"version" : {
// 					"uuid" : UUID("c7103e8f-4ed1-483f-933e-992d2200c79d"),
// 					"timestamp" : Timestamp({ t: 1735310665, i: 1 }),
// 					"lastMod" : 1
// 				}
// 			},
// 			"collections" : {
				
// 			}
// 		}
// 	]
// }