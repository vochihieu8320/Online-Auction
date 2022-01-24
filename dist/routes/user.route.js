"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const user_service_1 = __importDefault(require("../service/user.service"));
const router = express.Router();
router.post('/register', user_controller_1.default.Register);
router.post('/login', user_controller_1.default.Login);
//User use token to get another token
router.post('/token', user_controller_1.default.refreshToken);
//check login 
router.post('/forgot-pwd', user_controller_1.default.forgot_pwd);
router.patch('/forgot-pwd', user_controller_1.default.check_forgot_pwd);
router.post('/change-pwd', user_controller_1.default.changePwd);
router.post('/refreshToken', user_controller_1.default.refreshToken);
router.post('/bide', user_service_1.default.authentication, user_controller_1.default.bide);
router.patch('/bide', user_service_1.default.authentication, user_controller_1.default.accept);
router.get('/:userID', user_service_1.default.authentication, user_controller_1.default.show);
router.get('/:userID/bide/:productID', user_service_1.default.authentication, user_controller_1.default.current_bide);
router.patch('/update_me/:userID', user_service_1.default.authentication, user_controller_1.default.update_me);
router.post('/:userID/like', user_service_1.default.authentication, user_controller_1.default.like);
exports.default = router;
