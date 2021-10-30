const express = require('express')
import route from '.';
import userOnlineController from '../controller/user-online.controller';
import userController from '../controller/user.controller';
import userService from '../service/user.service';
import uploadfileController from '../controller/uploadfile.controller';


const router = express.Router();

router.get('/', userService.authentication, userController.show);
router.get('/:userID', userService.authentication, userController.detailUser);
router.get('/ping', userService.authentication, userController.show);

router.post('/', userController.createUser);
router.post('/register', userController.Register);
//upload avatart
router.post('/upload', userService.authentication, uploadfileController.uploadAvtar)
router.post('/login', userController.Login)
//User use token to get another token
router.post('/token', userController.refreshToken)
//check login 
router.post('/check-login',userService.authentication, userController.check_login );
//update user;

router.put('/:userID', userService.authentication, userController.updateUser )
router.delete('/:user_name', userService.authentication, userController.Logout)
//user logout


router.get('/ping', userController.show)

export default router;

