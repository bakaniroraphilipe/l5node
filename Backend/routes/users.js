const express = require('express')
const db = require('../db')
const router = express.Router()
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results)
    })
})
router.post('/', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email required"
        })
    }
    const sql = "INSERT INTO users(name,email) VALUES(?,?)"
    db.query(sql, [name, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({
            message: "user created successfull",
            userId: result.insertId
        });
    });
});
module.exports = router;