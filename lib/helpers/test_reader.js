const mod = require('./test_module');
mod.options.handler.proxy.xforward = false;
console.log('mod: ', mod.options.handler.proxy.mapUri('hello'));
