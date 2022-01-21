const express = require('express')
import userController from '../controller/user.controller';
import userService from '../service/user.service';

const router = express.Router();
router.post('/register', userController.Register);
router.post('/login', userController.Login)
//User use token to get another token
router.post('/token', userController.refreshToken)
//check login 
router.post('/forgot-pwd', userController.forgot_pwd)
router.patch('/forgot-pwd', userController.check_forgot_pwd);
router.post('/change-pwd', userController.changePwd)
router.post('/refreshToken', userController.refreshToken)
router.post('/bide', userService.authentication, userController.bide);
router.patch('/bide', userService.authentication, userController.accept);
router.get('/:userID', userService.authentication, userController.show)
export default router;

