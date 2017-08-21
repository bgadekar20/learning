var express = require('express');
var app = express();


app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req,res){
console.log("I received a get request");
	p1 = {
	name: 'Abc',
	email: 'xyz',
	number: '111111111'
};

p2 = {
	name: 'def',
	email: 'xyz',
	number: '111111111'
};
p3 = {
	name: 'ghi',
	email: 'xyz',
	number: '111111111'
};

p4 = {
	name: 'jkl',
	email: 'xyz',
	number: '111111111'
};

p5 = {
	name: 'jkl',
	email: 'xyz',
	number: '111111111'
};

var contactlist = [p1, p2, p3, p4, p5];
res.json(contactlist);
});


app.listen(3000);
console.log("Server running on 3000");