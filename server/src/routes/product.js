import {Router} from 'express'
import {ProductAllController, ProductCreateController, ProductIdController, ProductNameController, ProductUpdateController} from '../controllers/Product.js'

export const product = Router()

product.post('/product/create',ProductCreateController)
product.put('/product/update',ProductUpdateController)
product.post('/product/id',ProductIdController)
product.post('/product/name',ProductNameController)
product.get('/products',ProductAllController)
