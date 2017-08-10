import {Controller} from "./controller-base"
let formidable = require("formidable");
let fs = require("fs");

export class FileUploadCtrl extends Controller {

    //========================================================================
    //  Express handlers
    //========================================================================
    upload(target: string, req, res) {
        let form = new formidable.IncomingForm();
        let filesArr = [];

        form.on("error", (err) => {
            console.log("FORM ERROR");
            console.log("Error: " + err.message);
        })
        
        form.parse(req);

        form.on('fileBegin', function (name, file){
            file.path = target + "/" + file.name;
        });

        form.on('file', function (name, file){
            console.log('Uploaded ' + file.name);
        });

        form.on('end', function() {
            res.sendStatus(200); 
        });
    }

    
    //========================================================================
    //  Private methods
    //========================================================================
}