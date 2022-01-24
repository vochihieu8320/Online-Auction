const express = require('express')
import BideController from '../controller/bide.controller'
import authenticationService from '../service/authentication.service';
 
const router = express.Router();

router.post('/', authenticationService.authentication, BideController.addBide);
router.get('/', authenticationService.authentication, BideController.index)

export default router;