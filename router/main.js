import AdminRoute from './admin.js';
import Chat from './chat.js'

import express from 'express';
import ProductDetails from './productdetails.js'

const router = express.Router();
const adminRoute = new AdminRoute();
const chat = new Chat();
const productDetails = new ProductDetails()


function Routes(app){
    app.use('/product',adminRoute.allRoute())
    app.use('/chat',chat.allRoute())
    app.use('/productdetails',productDetails.allRoute())
}

export default Routes;