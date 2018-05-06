var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/local' , ['students']);



// Get All students
router.get('/students', function(req, res, next){
    db.students.find(function(err, students){
        if(err){
            res.send(err);
            console.log(err);
        }
        res.json(students);
    });

});

// Get Single student
router.get('/student/:id', function(req, res, next){
    db.students.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, student){
        if(err){
            res.send(err);
        }
        res.json(student);
    });
});

//save student
router.post('/student', function(req, res, next){
    var task = req.body;
    
        db.students.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
});


// Delete student
router.delete('/student/:id', function(req, res, next){
    db.students.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, student){
        if(err){
            res.send(err);
        }
        res.json(student);
    });
});

module.exports = router ;