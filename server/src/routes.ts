import express from 'express';
import ProductsController from './controllers/ProductsController';
import TotalProducts from './controllers/totalProducts';

const routes = express.Router();
const productsController = new ProductsController();
const totalProducts = new TotalProducts();



routes.post('/products', productsController.create);
routes.get('/products', productsController.index);
routes.get('/products/total', totalProducts.index);
routes.put('/products/:id', productsController.change);
routes.delete('/products/:id', productsController.exclud);


export default routes;