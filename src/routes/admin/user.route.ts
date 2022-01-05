const express = require('express')
import categoryController from '../../controller/admin/manageuser.controller';

const router = express.Router();

router.get('/user/list',categoryController.List);
router.post('/user',categoryController.Register)
router.delete('/user/:id',categoryController.Delete)
/*router.post('/login', userController.Login)
//User use token to get another token
router.post('/token', userController.refreshToken)
//check login 
router.post('/check-login',userService.authentication, userController.check_login );*/

export default router;

