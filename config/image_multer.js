const multer =  require("multer")
const path = require("path")
const express = require("express")


const fileStorageEngine = multer.diskStorage({
    destination:"./upload/images",
    filename: (req, file, cd) => {
        cd(null, Date.now() + '--' + file.originalname)
    }
});

const upload = multer({
    storage: fileStorageEngine
});

module.exports = upload