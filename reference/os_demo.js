
const os=require('os')
const print=require('../utility.js')
//get the operating system name
console.log(os.platform())

//Cpu Architecture
console.log(os.arch())

//Cpu core info
console.log(os.cpus())

//Free memory
console.log(os.freemem())
//Total memory
console.log(os.totalmem())

//Home Directory
print(os.homedir())
//uptime
print(os.uptime()/(60*60*24*30))

//user info
print(os.userInfo())

//os version
print(os.version())
