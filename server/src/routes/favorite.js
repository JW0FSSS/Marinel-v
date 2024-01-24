import {Router} from 'express'
import { FavoriteAddController, FavoriteDeleteController, FavoriteUserIdController } from '../controllers/Favorite.js'

export const favorite= Router()

favorite.post('/favorite',FavoriteUserIdController)
favorite.post('/favorite/add',FavoriteAddController)
favorite.post('/favorite/delete',FavoriteDeleteController)