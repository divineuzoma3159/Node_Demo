const os = require('os');

//To get the user info
const user = os.userInfo();
console.log(user);

//To check the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
console.log(`Hostname: ${os.hostname()}`);