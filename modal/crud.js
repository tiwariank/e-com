import { response } from "express";
import connection from "./ormconfig.js";
import productschema from "./productschema.js";


export default class CRUD {

    queryData = async () => {
        var dbObj = await connection();

        var ProductSchema = new productschema({
            name:"quizz1",
            image:"img1",
            price:50000
        });
        ProductSchema.save((err, data) => {
            if(err) {
                console.log(error);
            }
            else {
                console.log(data)
                console.log("data inserted successfully");
            }
        })
        // console.log("i am here")
        // console.log(ProductSchema)
        // dbObj.once('open', () => {
        //     console.log(productschema)
        //     const productschema = new productschema()
        //     console.log(productschema)

        // }
        // )
    }

     static async fetchAll(){
        console.log("i know about everyting")
        // console.log(await connection())
        var connectionObj = await connection();
        // console.log(connectionObj)
        // return connectionObj.collection('products').find().toArray()
        // .then(response=>{
        // console.log(response)
        // })
        // .catch(err=>{console.log(err)})

        // var ProductSchema = new productschema();
        console.log("prductschema")
        console.log(productschema)

        productschema.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
            }
        }); 
     }


    saveData = () => {

        

    }

    updateData = () => {

    }

}

