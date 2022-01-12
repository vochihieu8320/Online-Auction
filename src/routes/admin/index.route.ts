const express = require('express')
import usercontroller from '../../controller/admin/manageuser.controller';
import productController from "../../controller/admin/product.controller";
import authenticationService from '../../service/authentication.service';


const router = express.Router();

router.get('/users/reset-password/:userID', authenticationService.authentication,
                                    authenticationService.is_Admin,
                                    usercontroller.reset
                                    )

//users
router.get('/users', authenticationService.authentication,
                     authenticationService.is_Admin,
                     usercontroller.List);

router.delete('/user/:id', authenticationService.authentication,
                          authenticationService.is_Admin,
                          usercontroller.Delete);

// product 
router.get('/products',authenticationService.authentication, productController.index);
router.delete('/products/:productID', authenticationService.authentication, 
                                      authenticationService.is_Admin,
                                      productController.delete)
export default router;

