const express = require('express')
const router = express.Router();
import authenticationService from '../service/authentication.service';

import ProductFeatureController from '../controller/Product_feature.controller'
router.post('/', authenticationService.authentication, ProductFeatureController.create)
router.get('/:productID', authenticationService.authentication, ProductFeatureController.index)

export default router