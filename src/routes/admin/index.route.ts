const express = require('express')
import categoryController from '../../controller/admin/manageuser.controller';
import productController from "../../controller/admin/product.controller";
import authenticationService from '../../service/authentication.service';


const router = express.Router();

router.get('/user/list',categoryController.List);
router.post('/user',categoryController.Register)
router.delete('/user/:id',categoryController.Delete)

// product 
router.get('/products',authenticationService.authentication, productController.index);
router.delete('/products/:productID', authenticationService.authentication, 
                                      authenticationService.is_Admin,
                                      productController.delete)
export default router;

