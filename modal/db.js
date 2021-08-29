
import {MongoClient} from 'mongodb';
const uri = "mongodb+srv://ankitt969:ank@5668@cluster0.ldxeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


export default function dbConnection() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(client)
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });

}


