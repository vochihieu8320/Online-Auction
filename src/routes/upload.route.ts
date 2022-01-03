const express = require('express')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }) 
const router = express.Router();

import UploadfileController from '../controller/upload.controller'

router.post('/',  upload.single('file'), UploadfileController.upload)
router.delete('/:fileID',UploadfileController.deleteFile)


export default router


