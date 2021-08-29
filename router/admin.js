// const path = require('path');
// import path from 'path';
// import express from 'express';

// const express = require('express');

// const adminController = require('../controllers/admin');

// const router = express.Router();



// /admin/add-product => GET
// router.get('/add-product', ()=> {
//     console.log('add product')
// });

// /admin/products => GET
// router.get('/products', adminController.getProducts);

// router.get('/edit-product/:productid',adminController.getEditProduct);

// router.post('/edit-product',adminController.postEditProduct);

// router.post('/delete-product',adminController.postdeleteproduct); 

// // /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

// module.exports = router;

import express from 'express';

const router = express.Router();
import CRUD from '../modal/crud.js';

const crudObj = new CRUD();


export default class AdminRoute {


    allRoute =  () => {

        router.get('/', (req, res, next) => {
            // console.log(await crudObj.queryData())
             CRUD.fetchAll()
            res.send("hello i am here")
        })

        router.get('/add', (req, res, next) => {
            res.send("add products")
        })

        router.get('/update', (req, res, next) => {
            res.send("update products")
        })

        router.get('/delete', (req, res, next) => {
            res.send("delete products")
        })

        return router
    }

}
