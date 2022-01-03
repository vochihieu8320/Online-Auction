const express = require('express')
import AuctionController from '../controller/auction.controller';

const router = express.Router();

router.get('/', AuctionController.getAuctions)
router.post('/', AuctionController.createAuctions )

export default router;
