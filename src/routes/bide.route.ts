const express = require('express')
import BideController from '../controller/bide.controller'

const router = express.Router();

router.post('/', BideController.addBide)

export default router;