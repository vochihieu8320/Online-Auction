const express = require('express')
import AuctionController from '../controller/auction.controller';
import authenticationService from '../service/authentication.service';

const router = express.Router();

router.get('/', AuctionController.getAuctions)
router.post('/', AuctionController.createAuctions )
router.patch('/:auctionID', authenticationService.authentication, AuctionController.update)
router.post('/test', AuctionController.auction_history);
router.get('/user-winner', authenticationService.authentication, AuctionController.user_winners);
router.get('/reject/:auctionID', authenticationService.authentication, AuctionController.update_auction_when_reject)

export default router;
