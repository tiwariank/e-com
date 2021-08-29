import express from 'express';
const router = express.Router();
import ProductService from '../services/productservice.js';
import productDetailsSchema from '../modal/productDetailsSchema.js';
import connection from '../modal/ormconfig.js'

const productservice = new ProductService()

export default class ProductDetails {
  allRoute = () => {
    router.get("/", (req, res, next) => {
      connection().then((con) => {
        productDetailsSchema.find(async (err, data) => {
          if (err) {
            console.log(err);
            return err;
          } else {
            console.log(data);
            res.send(data);
          }
        });
      });
    });

    router.post("/add", (req, res, next) => {
      productservice.saveData(req.body);
      console.log(req.body);
      res.send("add chat");
    });

    router.put("/update", (req, res, next) => {
      productservice.updateData(req.body);
      res.send("update chat");
    });

    router.delete("/delete", (req, res, next) => {
      productservice.removeData(req.body);
      res.send("delete chat");
    });

    return router;
  };
}
