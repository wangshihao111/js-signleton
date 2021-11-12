const { createSingleton, overrideSingleton } = require('../lib/index');


const vvv = { a: 1 };

const bbb = { b: 1 };
overrideSingleton('x', 4)

const s = createSingleton('x', vvv);
const d = createSingleton('x', bbb);


console.log(s, d, s === d);