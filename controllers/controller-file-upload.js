"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_base_1 = require("./controller-base");
let formidable = require("formidable");
let fs = require("fs");
class FileUploadCtrl extends controller_base_1.Controller {
    //========================================================================
    //  Express handlers
    //========================================================================
    upload(target, req, res) {
        let form = new formidable.IncomingForm();
        let filesArr = [];
        form.parse(req /*, function(err, fields, files) {
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
        form.on('fileBegin', function (name, file) {
            file.path = target + "/" + file.name;
        });
        form.on('file', function (name, file) {
            console.log('Uploaded ' + file.name);
        });
        form.on('end', function () {
            res.sendStatus(200);
        });
    }
}
exports.FileUploadCtrl = FileUploadCtrl;
//# sourceMappingURL=controller-file-upload.js.map