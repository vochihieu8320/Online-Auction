const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger')

router.get('/', swaggerUi.setup(swaggerDocument));

export default router;
