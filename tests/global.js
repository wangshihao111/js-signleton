const { createGlobalSingleton } = require('../lib/index');


const vvv = { a: 1 };

const bbb = { b: 1 };

const s = createGlobalSingleton('x', vvv);
const d = createGlobalSingleton('x', bbb);


console.log(s, d, s === d);