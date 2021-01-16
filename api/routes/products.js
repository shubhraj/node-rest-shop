const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "handling GET req to /products" 
    })
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price 
    }

    res.status(201).json({
        message: "handling POST req to /products",
        createdProduct: product 
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: "you discovered Special Product",
            id: id
        });
    }else{
        res.status(200).json({
            message: 'this is simple product'
        });
    }
});


router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'updated product'
    })
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Deleted product'
    })
});


module.exports = router;