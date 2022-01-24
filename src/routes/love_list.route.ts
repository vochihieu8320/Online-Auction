const express = require('express')
import authenticationService from '../service/authentication.service';
import LoveListController from '../controller/love_list.controller';

const router = express.Router();

router.get('/:userID', authenticationService.authentication, LoveListController.index);
router.post('/', authenticationService.authentication, LoveListController.create);
router.delete('/:id', authenticationService.authentication, LoveListController.destroy)

export default router;