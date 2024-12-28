db.createRole(
    {
        role: "TEST",
        privileges: [
            //     { resource: { cluster: true }, actions: [ "addShard" ] },
            { resource: { db: "", collection: "" }, actions: [ "find"] },
        ],
        roles: [
            { role: "read", db: "admin" }
        ],
    },
)

db.createRole(
    {
        role: "GESTOR",
        privileges: [
            { resource: { db: "", collection: "" }, actions: [ "find", "update", "insert", "remove" ] },
        ],
        roles: [
            { role: "read", db: "admin" }, { role: "readWrite", db: "admin" }, { role: "dbAdmin", db: "admin" }
        ],
    },
)

db.updateRole("TEST", {
    privileges: [
        { resource: { db: "", collection: "" }, actions: ["find", "update", "insert", "remove"] }
    ],
    roles: [
        { role: "read", db: "admin" },
        { role: "readWrite", db: "admin" },
        { role: "dbAdmin", db: "admin" }
    ]
});

db.updateRole("GESTOR", {
    privileges: [
        { resource: { db: "", collection: "" }, actions: ["find", "update", "insert", "remove"] }
    ],
    roles: [
        { role: "read", db: "admin" },
        { role: "readWrite", db: "admin" },
        { role: "dbAdmin", db: "admin" }
    ]
});

db.createUser(
   {
     user: "SYS",
     pwd: "SYS",
     
     roles: [{"role":"root","db":"admin"}],
   }
)

db.createUser(
   {
     user: "userTest",
     pwd: "userTest",
     
     roles: [{"role":"TEST","db":"admin"}],
   }
)

db.createUser(
   {
     user: "userGestor",
     pwd: "userGestor",
     
     roles: [{"role":"GESTOR","db":"admin"}],
   }
)

db.createUser(
   {
     user: "userPython",
     pwd: "userPython",
     
     roles: [{"role":"TEST","db":"admin"}],
   }
)

db.createUser(
   {
     user: "gestorUsuaris",
     pwd: "gestorUsuaris",
     
     roles: [{"role":"GESTOR","db":"admin"}],
   }
)

db.createUser(
   {
     user: "gestorGeonames",
     pwd: "gestorGeonames",
     
     roles: [{"role":"GESTOR","db":"admin"}],
   }
)

db.updateUser("gestorGeonames", {
    roles: [{ role: "GESTOR", db: "admin" }]
});

db.grantRolesToUser("gestorGeonames", [{role: "clusterMonitor", db: "admin"}]);

db.grantRolesToUser("gestorGeonames", [
    { role: "clusterMonitor", db: "admin" },   // Permite monitorear el clúster
    { role: "readWrite", db: "admin" },        // Acceso completo de lectura/escritura en "admin"
    { role: "dbAdmin", db: "admin" },          // Permisos administrativos de la base de datos "admin"
    { role: "userAdmin", db: "admin" }         // Permiso para administrar usuarios y roles en "admin"
])

db.grantRolesToUser("userPython", [
    { role: "clusterMonitor", db: "admin" },   // Permite monitorear el clúster
    { role: "readWrite", db: "admin" },        // Acceso completo de lectura/escritura en "admin"
    { role: "dbAdmin", db: "admin" },          // Permisos administrativos de la base de datos "admin"
    { role: "userAdmin", db: "admin" }         // Permiso para administrar usuarios y roles en "admin"
])

use admin
db.grantRolesToUser("gestorGeonames", [{ role: "readWrite", db: "admin" }])
db.grantRolesToUser("gestorGeonames", [{ role: "readWrite", db: "Practica_3" }])

db.grantRolesToUser("userPython", [{ role: "readWrite", db: "admin" }])
db.grantRolesToUser("userPython", [{ role: "readWrite", db: "Practica_3" }])

