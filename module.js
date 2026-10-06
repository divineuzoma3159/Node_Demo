
const names = require('./module1')
const Hisoka = require('./module2')
const Iwant = require('./module2')
const any = require('./altmod')
console.log(any)
Hisoka('Emily')
Hisoka(names.john)
Hisoka(names.peter)
Iwant(names.free)

require('./mindgrenade')