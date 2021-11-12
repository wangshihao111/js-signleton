const { createGlobalSingleton, overrideGlobalSingleton } = require('../lib/index');


const vvv = { a: 1 };

const bbb = { b: 1 };



const s = createGlobalSingleton('x', vvv);
const d = createGlobalSingleton('x', bbb);
overrideGlobalSingleton('x', 123)

console.log(s, d, s === d, global.__jsSingleton__);