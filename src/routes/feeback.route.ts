const express = require('express')
import authenticationService from '../service/authentication.service';
import feed_backController from '../controller/feed_back.controller';

const router = express.Router();

router.get('/', authenticationService.authentication, feed_backController.index);
router.post('/', authenticationService.authentication, feed_backController.create)

export default router;