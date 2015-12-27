var express = require('express');
var router = express.Router();

var todolist = [];

router.get('/add',function(req,res){
    if(req.session.user){
        res.render('todo',{
            title:'My todos',
            items:todolist
        });	
    }else{
        res.redirect('/');
    }
});

router.post('/add',function(req,res){
	var newItem = req.body.newItem;
	todolist.push({
		id:todolist.length+1,
		todo:newItem,
        createddate: new Date()
	});
	res.redirect('/add');
});

router.get('/delete/:id',function(req,res){
	for(var i=0; i<todolist.length; i++){
        if(req.params.id==todolist[i].id){
            todolist.splice(i,1);
            break;
        }
    }
	res.redirect('/add');
});

module.exports = router;