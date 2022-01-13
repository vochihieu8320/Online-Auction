const express = require('express')
import BideController from '../controller/bide.controller'
import authenticationService from '../service/authentication.service';
 
const router = express.Router();

router.post('/', authenticationService.authentication, BideController.addBide);
router.patch('/:userID', authenticationService.authentication, BideController.update)

export default router;