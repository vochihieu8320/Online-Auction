const express = require('express')
import usercontroller from '../../controller/admin/manageuser.controller';
import productController from "../../controller/admin/product.controller";
import authenticationService from '../../service/authentication.service';
import inboxController from '../../controller/admin/inbox.controller';
import route from '..';

const router = express.Router();

router.get('/users/reset-password/:userID', authenticationService.authentication,
                                    authenticationService.is_Admin,
                                    usercontroller.reset
                                    )
router.get('/users/length', authenticationService.authentication,
                            authenticationService.is_Admin,
                            usercontroller.length)
//users
router.get('/users', authenticationService.authentication,
                     authenticationService.is_Admin,
                     usercontroller.List);

router.delete('/users/:id', authenticationService.authentication,
                          authenticationService.is_Admin,
                          usercontroller.Delete);

// product 
router.get('/products',authenticationService.authentication, productController.index);
router.delete('/products/:productID', authenticationService.authentication, 
                                      authenticationService.is_Admin,
                                      productController.delete)

// inbox

router.get('/inboxes/length', authenticationService.authentication,
                      authenticationService.is_Admin,
                      inboxController.length)

router.get('/inboxes', authenticationService.authentication,
                      authenticationService.is_Admin,
                      inboxController.index)
                    
router.patch('/inboxes/:inboxID', authenticationService.authentication,
                                   authenticationService.is_Admin,
                                    inboxController.update)

router.get('/inboxes/search', authenticationService.authentication,
                            authenticationService.is_Admin,
                            inboxController.search)
export default router;

