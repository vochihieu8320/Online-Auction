const express = require('express')
import productController from '../controller/product.controller';
import authenticationService from '../service/authentication.service';

const router = express.Router();

// router.get('/:page', authenticationService.authentication, productController.List );
router.get('/length', authenticationService.authentication, productController.Length)
router.get('/', authenticationService.authentication, productController.List);
router.get('/best-bider-bide', authenticationService.authentication, productController.best_bider_bide);
router.get('/best-price', authenticationService.authentication, productController.best_price);
router.get('/:productID', authenticationService.authentication, productController.show);
router.post('/', authenticationService.authentication, 
                 authenticationService.is_Seller,
                productController.Add)
router.patch('/:productID', authenticationService.authentication, 
                            authenticationService.is_Seller,
                            productController.Update)
router.delete('/:id', authenticationService.is_Admin,
                      productController.Delete);


export default router;

