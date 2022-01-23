const express = require('express')
import authenticationService from '../service/authentication.service';
import AuctionHistory from '../controller/auction_history.controller'
const router = express.Router();

router.delete('/:id', authenticationService.authentication, AuctionHistory.destroy )

export default router;