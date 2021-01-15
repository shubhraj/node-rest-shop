const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "handling GET req to /products" 
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "handling POST req to /products" 
    })
});

module.exports = router;