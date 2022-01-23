const express = require('express')
import AuctionController from '../controller/auction.controller';
import authenticationService from '../service/authentication.service';

const router = express.Router();

router.get('/', AuctionController.getAuctions)
router.post('/', AuctionController.createAuctions )
router.patch('/:auctionID', authenticationService.authentication, AuctionController.update)
router.post('/test', AuctionController.auction_history)

export default router;
