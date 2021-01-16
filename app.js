const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//To Prevent CORS Errors Setting the Headers 
app.use((req, res, next) => {
    res.header('Access-control-Allow-Origin','*');
    res.header('Access-control-Allow-Headers',
    'Origin, X-Requested-with, Content-Type, Accept, Authorization');
    
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
})


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
     const error = new Error('res not found');
     error.status = 404;
     next(error);   
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message: error.message    
        }
    })
});

module.exports = app;
