const express = require('express')
import authenticationService from '../service/authentication.service';
import inboxController from '../controller/inbox.controller';
const router = express.Router();

router.post('/', authenticationService.authentication, inboxController.create)

export default router;