const express = require('express');
import CategoryController from '../controller/category.controller';
import CategoryService from '../service/category.service';
import authenticationService from '../service/authentication.service';
const router = express.Router();

router.get('/length', authenticationService.authentication,
                      CategoryController.Length)

router.get('/short-hand', authenticationService.authentication,
                          CategoryController.index_not_parent)
                          
router.post('/', authenticationService.authentication,
                 authenticationService.is_Admin,
                 CategoryService.check_parent ,
                 CategoryController.create);

router.get('/:categoryID',  authenticationService.authentication, 
                            authenticationService.is_Admin,
                            CategoryController.show )
router.patch('/:categoryID', authenticationService.authentication,
                             authenticationService.is_Admin, 
                             CategoryService.check_parent, 
                             CategoryController.update)
router.get('/',  authenticationService.authentication,
                CategoryController.index)
router.delete('/:categoryID', authenticationService.authentication,
                              authenticationService.is_Seller_Admin,
                              CategoryController.delete)
export default router;