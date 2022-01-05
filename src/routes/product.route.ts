const express = require('express')
import productController from '../controller/product.controller';
import productService from '../service/product.service';
const router = express.Router();

router.get('/:page',productController.index );
router.post('/', productService.check_category, productController.Add)
router.patch('/:productID', productController.Update)
router.delete('/:productID',productController.Delete)

export default router;

