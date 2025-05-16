const path = require('path')
const multer = require('multer')

const maxSize = 1024 * 1024 * 4

var storage = multer.diskStorage({
  destination: function (req, res, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    let ext = path.extname(file.originalname)
    cb(null, Date.now() + ext)
  }
})

// Storage
var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb){ 
    //Filtering file type
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg'){
      cb(null, true)
    } else{
      console.log("Only png and jpg filetype supported")
      cb(null, false)
    }
  },
  limits:{ // Filtering file size (4MB)
    fileSize: maxSize
  }
})

module.exports = upload