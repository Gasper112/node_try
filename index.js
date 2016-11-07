var server = require('./server');
var router = require('./router');
var request_handlers = require('./request_handlers');

var handle = {}
handle["/"] = request_handlers.start;
handle['/start'] = request_handlers.start;
handle['/update'] = request_handlers.update;

server.start(router.route, handle);