import fs from 'fs';

function Stream() {

    
    const readFile = () => {
        console.log("can u see reading abc")

        fs.readFile('services\\abc.txt',(err, data)=>{
            if(err){
                return err
            } else {
                data.map(e => {
                    console.log(e)
                })
            }
        })
    }

    return readFile();

}

export default Stream;