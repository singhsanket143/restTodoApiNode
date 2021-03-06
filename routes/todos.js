var express = require('express');
var router = express.Router();
var db = require('../models');
router.get('/', function (req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function(Err) {
            res.send(Err);
        });
});
router.post('/', function (req, res) {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            console.log(err);
        });
});
router.get('/:todoId', function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(function(foundTodo) {
             res.json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        });
});
module.exports = router;