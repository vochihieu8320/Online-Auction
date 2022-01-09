const express = require('express')
const router = express.Router();
import OtpController from '../controller/otp.controller';

router.post('/', OtpController.create)
router.patch('/', OtpController.update)

export default router