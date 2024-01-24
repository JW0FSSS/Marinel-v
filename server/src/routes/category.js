import {Router} from 'express'
import { CategoryCreateController, CategoryGetController, CategoryUpdateController } from '../controllers/Category.js'

export const category=Router()

category.get('/category',CategoryGetController)
category.post('/category/name',CategoryCreateController)
category.post('/category/add',CategoryUpdateController)