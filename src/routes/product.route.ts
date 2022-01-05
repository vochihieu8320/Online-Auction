const express = require('express')
import productController from '../controller/product.controller';

const router = express.Router();

router.get('/:page',productController.List );
router.get('/:id',productController.findById)
router.post('/',productController.Add)
router.put('/',productController.Update)
router.delete('/:id',productController.Delete)
/*router.post('/login', userController.Login)
//User use token to get another token
router.post('/token', userController.refreshToken)
//check login 
router.post('/check-login',userService.authentication, userController.check_login );*/

export default router;

