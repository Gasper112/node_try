var exec = require('child_process').exec;
var fs = require('fs');
var querystring = require('querystring');

function sleep(milliSeconds){
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}

function start(response, postData){
	console.log("Request handler 'start' was called.");

	var body = '';


	body = fs.readFileSync('./start.html',{encoding:'utf8'}, function (err,data){
		if (err) throw err;
		body = data;
		console.log(body);
	});

	console.log('body = ', body);

	response.writeHead(200,{"Content-Type":"text/html"})
	response.write(body);
	response.end();
}

function update(response, postData){
	console.log("Request handler 'update' was called");
	response.writeHead(200,{"Content-Type":"text/plain"})
	response.write("You've sent: " + postData);
	response.end();
}

exports.start = start;
exports.update = update;