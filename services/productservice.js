import { response } from 'express'
import connection from '../modal/ormconfig.js'
// import ProductDetails from "../router/productdetails.js";
import productDetailsSchema from '../modal/productDetailsSchema.js'

export default class ProductService {
  queryData = async () => {
    var dbObj = await connection();
    var ProductDetails = new productDetailsSchema({
      product_id: "String",
      product_name: "String",
      unit: "String",
      price: 44,
      currency: "String",
      manufacturer: "String",
      manufacturer_id: "String",
      vendor: "String",
      vendor_id: "String",
      product_image_path: "String",
    });
    ProductDetails.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        console.log("data inserted successfully");
      }
    });
    // console.log("i am here")
    // console.log(ProductSchema)
    // dbObj.once('open', () => {
    //     console.log(productschema)
    //     const productschema = new productschema()
    //     console.log(productschema)

    // }
    // )
  };

  fetchAll = async () => {
    var dbObj = await connection();
    console.log("i know about everyting");
    // console.log(await connection())
    // var connectionObj = await connection()
    // console.log(connectionObj)
    // return connectionObj.collection('products').find().toArray()
    // .then(response=>{
    // console.log(response)
    // })
    // .catch(err=>{console.log(err)})

    var ProductSchema = new productDetailsSchema();

    // productDetailsSchema.find(function (err, data) {
    //   if (err) {
    //     console.log(err);
    //     return err;
    //   } else {
    //     console.log(data);
    //     console.log("i am here at line 60")
    //     return data;
    //   }
    // });

    var response 
    productDetailsSchema.find(function (err, data){
      response = "123"
    }).then(res => {
      response = "123"
    })
    console.log(response)
    return response
  };

  saveData = async (input) => {
    var dbObj = await connection();
    console.log("78");
    console.log(input.product_id);
    var ProductDetails = new productDetailsSchema({
      product_id: input.product_id,
      product_name: input.ProductDetailsproduct_name,
      unit: input.unit,
      price: input.price,
      currency: input.currency,
      manufacturer: input.manufacturer,
      manufacturer_id: input.manufacturer_id,
      vendor: input.vendor,
      vendor_id: input.vendor_id,
      product_image_path: input.product_image_path,
    });
    ProductDetails.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        console.log("data inserted successfully");
      }
    });
  };

  updateData = async (input) => {
    var dbObj = await connection();
    try {
      productDetailsSchema
        .findOne({ product_id: input.product_id })
        .then((response) => {
          console.log(response);
          var Productscm = new productDetailsSchema(response);

          Productscm.updateOne(
            { product_id: "new product id" },
            (err, response) => {
              if (err) {
                console.log(err);
              } else {
                console.log("updated successfully");
              }
            }
          );
        });
    } catch (e) {
      console.log(e);
    }
  };

  removeData = async (input) => {
    var dbObj = await connection();
    console.log(input)
    try {
      var Productscm = new productDetailsSchema();
      Productscm.deleteOne({ _id: "612a65c2ef89f52e4094febe" }, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("deleted successfully");
        }   
      });
    } catch (e) {
      console.log(e);
    }
  };
}
