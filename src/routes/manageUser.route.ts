const express = require('express')
import categoryController from '../controller/manageuser.controller';

const router = express.Router();

router.get('/list',categoryController.List);
router.post('/',categoryController.Register)
router.delete('/:id',categoryController.Delete)
/*router.post('/login', userController.Login)
//User use token to get another token
router.post('/token', userController.refreshToken)
//check login 
router.post('/check-login',userService.authentication, userController.check_login );*/

export default router;

