db.runCommand({
  usersInfo: {
    user: "SYS",
    db: "admin"
  },
  showPrivileges: true
})

db.runCommand({
  usersInfo: {
    user: "userTest",
    db: "admin"
  },
  showPrivileges: true
})

db.runCommand({
  usersInfo: {
    user: "userGestor",
    db: "admin"
  },
  showPrivileges: true
})

db.runCommand({
  usersInfo: {
    user: "userPythom",
    db: "admin"
  },
  showPrivileges: true
})

db.runCommand({
  usersInfo: {
    user: "gestorUsuaris",
    db: "admin"
  },
  showPrivileges: true
})

db.runCommand({
  usersInfo: {
    user: "gestorGeonames",
    db: "admin"
  },
  showPrivileges: true
})

db.runCommand({
  usersInfo: {
    user: "gestorGeonames",
    db: "Practica_3"
  },
  showPrivileges: true
})