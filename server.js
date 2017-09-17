var express = require('express');

var app = express();

app.use(express.static('./dist'));

var router = express.Router();

router.get('/',function(req,res,next) {
	req.url = '/index.html';
	next();
})

app.use(router);

app.listen(9000,function() {
	console.log('success 9000');
})