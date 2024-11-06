import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



class Aboba{

    create = (req, res) => {
       
        const dataObject = {

            email: req.body.email,

            Name_Subject: req.body.Name_Subject,
            
            age: req.body.age,
        
            Gavko_Name: req.body.Gavko_Name
        
        }
    
        const folderPath = join(__dirname, 'DataBase');
        const filePath = join(folderPath, dataObject.Name_Subject + ".json");
    
        console.log(filePath)
    
        fs.writeFile(filePath, JSON.stringify(dataObject, null, 2), (err) =>{
            if (err) {
    
                console.log(err);
                return;
            
            }
            console.log("File create succesfull")
        });
    }

};



export default Aboba;