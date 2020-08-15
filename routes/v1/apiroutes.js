const express = require('express');
const sampleController = require('../../controllers');

// Initializing route groups
const apiRoutes = express.Router(),
    sampleRoute = express.Router();
    productRoutes = express.Router();

apiRoutes.use('/route1', sampleRoute);
sampleRoute.get('/:param1', sampleController.sample);
sampleRoute.post('/:param1', sampleController.sample);
sampleRoute.put('/:param1', sampleController.sample);
sampleRoute.delete('/:param1', sampleController.sample);

apiRoutes.use('/products', productRoutes);
const productsController = sampleController.products;
productRoutes.get('/:pid', productsController.getProduct)
productRoutes.get('/', productsController.getProducts)

exports.apiRoutesV1 = apiRoutes;