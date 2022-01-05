const express = require('express');
import route from '.';
import CategoryController from '../controller/category.controller';
import CategoryService from '../service/category.service';
const router = express.Router();

router.post('/', CategoryService.check_parent ,CategoryController.create);
router.patch('/:categoryID', CategoryService.check_parent, CategoryController.update)
router.get('/', CategoryController.index)
router.delete('/:categoryID', CategoryController.delete)
export default router;