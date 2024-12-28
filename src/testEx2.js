rs.status();

// Output:
// {
// 	"set" : "rs0",
// 	"date" : ISODate("2024-12-27T16:13:25.058+01:00"),
// 	"myState" : 1,
// 	"term" : 5,
// 	"syncSourceHost" : "",
// 	"syncSourceId" : -1,
// 	"heartbeatIntervalMillis" : 2000,
// 	"majorityVoteCount" : 2,
// 	"writeMajorityCount" : 2,
// 	"votingMembersCount" : 3,
// 	"writableVotingMembersCount" : 3,
// 	"optimes" : {
// 		"lastCommittedOpTime" : {
// 			"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 			"t" : 5
// 		},
// 		"lastCommittedWallTime" : ISODate("2024-12-27T16:13:21.670+01:00"),
// 		"readConcernMajorityOpTime" : {
// 			"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 			"t" : 5
// 		},
// 		"appliedOpTime" : {
// 			"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 			"t" : 5
// 		},
// 		"durableOpTime" : {
// 			"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 			"t" : 5
// 		},
// 		"lastAppliedWallTime" : ISODate("2024-12-27T16:13:21.670+01:00"),
// 		"lastDurableWallTime" : ISODate("2024-12-27T16:13:21.670+01:00")
// 	},
// 	"lastStableRecoveryTimestamp" : Timestamp({ t: 1735312361, i: 1 }),
// 	"electionCandidateMetrics" : {
// 		"lastElectionReason" : "stepUpRequestSkipDryRun",
// 		"lastElectionDate" : ISODate("2024-12-26T18:09:19.368+01:00"),
// 		"electionTerm" : 5,
// 		"lastCommittedOpTimeAtElection" : {
// 			"ts" : Timestamp({ t: 1735232952, i: 1 }),
// 			"t" : 4
// 		},
// 		"lastSeenOpTimeAtElection" : {
// 			"ts" : Timestamp({ t: 1735232952, i: 1 }),
// 			"t" : 4
// 		},
// 		"numVotesNeeded" : 2,
// 		"priorityAtElection" : 1,
// 		"electionTimeoutMillis" : 10000,
// 		"priorPrimaryMemberId" : 1,
// 		"numCatchUpOps" : 0,
// 		"newTermStartDate" : ISODate("2024-12-26T18:09:19.414+01:00"),
// 		"wMajorityWriteAvailabilityDate" : ISODate("2024-12-26T18:09:19.637+01:00")
// 	},
// 	"members" : [
// 		{
// 			"_id" : 0,
// 			"name" : "main.grup15.gabd:37017",
// 			"health" : 1,
// 			"state" : 1,
// 			"stateStr" : "PRIMARY",
// 			"uptime" : 79485,
// 			"optime" : {
// 				"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 				"t" : 5
// 			},
// 			"optimeDate" : ISODate("2024-12-27T16:13:21.000+01:00"),
// 			"lastAppliedWallTime" : ISODate("2024-12-27T16:13:21.670+01:00"),
// 			"lastDurableWallTime" : ISODate("2024-12-27T16:13:21.670+01:00"),
// 			"syncSourceHost" : "",
// 			"syncSourceId" : -1,
// 			"infoMessage" : "",
// 			"electionTime" : Timestamp({ t: 1735232959, i: 1 }),
// 			"electionDate" : ISODate("2024-12-26T18:09:19.000+01:00"),
// 			"configVersion" : 1,
// 			"configTerm" : 5,
// 			"self" : true,
// 			"lastHeartbeatMessage" : ""
// 		},
// 		{
// 			"_id" : 1,
// 			"name" : "mongo-1.grup15.gabd:37017",
// 			"health" : 1,
// 			"state" : 2,
// 			"stateStr" : "SECONDARY",
// 			"uptime" : 79423,
// 			"optime" : {
// 				"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 				"t" : 5
// 			},
// 			"optimeDurable" : {
// 				"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 				"t" : 5
// 			},
// 			"optimeDate" : ISODate("2024-12-27T16:13:21.000+01:00"),
// 			"optimeDurableDate" : ISODate("2024-12-27T16:13:21.000+01:00"),
// 			"lastAppliedWallTime" : ISODate("2024-12-27T16:13:21.670+01:00"),
// 			"lastDurableWallTime" : ISODate("2024-12-27T16:13:21.670+01:00"),
// 			"lastHeartbeat" : ISODate("2024-12-27T16:13:23.846+01:00"),
// 			"lastHeartbeatRecv" : ISODate("2024-12-27T16:13:23.173+01:00"),
// 			"pingMs" : 0,
// 			"lastHeartbeatMessage" : "",
// 			"syncSourceHost" : "main.grup15.gabd:37017",
// 			"syncSourceId" : 0,
// 			"infoMessage" : "",
// 			"configVersion" : 1,
// 			"configTerm" : 5
// 		},
// 		{
// 			"_id" : 2,
// 			"name" : "mongo-2.grup15.gabd:37017",
// 			"health" : 1,
// 			"state" : 2,
// 			"stateStr" : "SECONDARY",
// 			"uptime" : 79371,
// 			"optime" : {
// 				"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 				"t" : 5
// 			},
// 			"optimeDurable" : {
// 				"ts" : Timestamp({ t: 1735312401, i: 1 }),
// 				"t" : 5
// 			},
// 			"optimeDate" : ISODate("2024-12-27T16:13:21.000+01:00"),
// 			"optimeDurableDate" : ISODate("2024-12-27T16:13:21.000+01:00"),
// 			"lastAppliedWallTime" : ISODate("2024-12-27T16:13:21.670+01:00"),
// 			"lastDurableWallTime" : ISODate("2024-12-27T16:13:21.670+01:00"),
// 			"lastHeartbeat" : ISODate("2024-12-27T16:13:23.847+01:00"),
// 			"lastHeartbeatRecv" : ISODate("2024-12-27T16:13:24.111+01:00"),
// 			"pingMs" : 0,
// 			"lastHeartbeatMessage" : "",
// 			"syncSourceHost" : "mongo-1.grup15.gabd:37017",
// 			"syncSourceId" : 1,
// 			"infoMessage" : "",
// 			"configVersion" : 1,
// 			"configTerm" : 5
// 		}
// 	],
// 	"ok" : 1,
// 	"$clusterTime" : {
// 		"clusterTime" : Timestamp({ t: 1735312401, i: 1 }),
// 		"signature" : {
// 			"hash" : BinData(0,"uyu4UeGASTTmESAB62du4wc+ROI="),
// 			"keyId" : Long("7452774268749742081")
// 		}
// 	},
// 	"operationTime" : Timestamp({ t: 1735312401, i: 1 })
// }
