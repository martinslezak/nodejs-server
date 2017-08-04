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
        form.parse(req/*, function(err, fields, files) {
            if (files) {
                let arr = [];
                for (let f in files) {
                    filesArr.push(f);
                }
                console.log("Files arrived!");
                console.log(arr.join(", "));
            } else {
                console.log("Oooops, no file here...");
            }
        }*/);

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