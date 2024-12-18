//todo

//todo
const express = require('express');

const router = express.Router()


router.get('/', (req, res) => res.send('API is running!'));
router.get('/register', (req, res) => res.send('API is running!'));
router.get('/login', (req, res) => res.send('API is running!'));
router.get('/refresh-token', (req, res) => res.send('API is running!'));
router.get('/logout', (req, res) => res.send('API is running!'));

module.exports = router