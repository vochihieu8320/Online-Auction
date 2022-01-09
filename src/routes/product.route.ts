const express = require('express')
import productController from '../controller/product.controller';
import authenticationService from '../service/authentication.service';

const router = express.Router();

// router.get('/:page', authenticationService.authentication, productController.List );
router.get('/:id', authenticationService.authentication, productController.findById)
router.post('/', authenticationService.authentication, 
                 authenticationService.is_Seller_Admin,
                productController.Add)
router.patch('/:productID', authenticationService.authentication, 
                            authenticationService.is_Seller_Admin,
                            productController.Update)
router.delete('/:id', authenticationService.is_Admin,
                      productController.Delete)

export default router;

