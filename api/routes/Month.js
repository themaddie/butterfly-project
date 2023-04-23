const express = require('express');
const router = express.Router();

const Task = require('../models/Month');

router.get('/todos', async (req, res) => {
    const todos = await Task.find();
    res.json(todos);
});

router.post('/todo/new', async (req, res) => {
    const todo = new Task({
        text: req.body.text,
        label: req.body.label,
    });
    todo.save();

    res.json(todo);
});

router.delete('/todo/delete/:id', async (req, res) => {
    const result = await Task.findByIdAndDelete(req.params.id);

    res.json(result);
});

router.put('/todo/complete/:id', async (req, res) => {
    const todo = await Task.findById(req.params.id);

    todo.complete = !todo.complete;

    todo.save();

    res.json(todo);
});

module.exports = router;