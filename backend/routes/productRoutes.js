import express from 'express'
const router = express.Router()
import {
  getProducts,
  getSellerProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import {
  protect,
  admin,
  admin_or_seller,
} from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin_or_seller, createProduct)
router.route('/seller').get(protect, getSellerProducts)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin_or_seller, deleteProduct)
  .put(protect, admin_or_seller, updateProduct)

export default router
