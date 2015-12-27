var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('login',{
		title:'Login',
        error:''
	});	
});

var username = "anas";
var password = "123456";

router.post('/login',function(req,res){
	if(username == req.body.username && password == req.body.password){
        req.session.user = username;
        res.redirect('/add');
    }
    res.render('login',{
        title:'Login',
        error : 'invalid username / password!'
    });
});

module.exports = router;