const fs = require('fs');
/*
let readData = fs.readFile(__dirname+'/app.js', 'utf8',function(err, data){
	console.log(data);
});
*/

let rStream = fs.createReadStream(__dirname+'/app.js', {encoding: 'utf8', highWaterMark: 32 * 1024});

let wStream = fs.createWriteStream(__dirname+'/appCopy.js', {encoding: 'utf8'});

/*
rStream.on('data', function(chunk){
	console.log(chunk);
	console.log(chunk.length);
	wStream.write(chunk);
});
*/

rStream.pipe(wStream);

