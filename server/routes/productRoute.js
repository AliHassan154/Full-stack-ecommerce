import express from 'express'
import { requireSignIn } from '../middlewares/authMiddleware.js'
import { isAdmin } from '../controllers/authController.js'
import { createProductController, deleteProductController, getProductController, getProductPhotoController, getSingleProductController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'


const router = express.Router()

router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);

router.get('/get-products', getProductController);

router.get('/get-product/:slug', getSingleProductController);

router.get('/product-photo/:pid', getProductPhotoController);

router.delete('/delete-product/:pid', requireSignIn, isAdmin, deleteProductController);

router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);

export default router