const express = require('express')
import productController from '../controller/product.controller';
import authenticationService from '../service/authentication.service';
const router = express.Router();

router.get('/:page',authenticationService.authentication, productController.List );
router.get('/:id',authenticationService.authentication, productController.findById)
router.post('/',authenticationService.authentication, productController.Add)
router.put('/',authenticationService.authentication, productController.Update)
router.delete('/:id',productController.Delete)

export default router;

