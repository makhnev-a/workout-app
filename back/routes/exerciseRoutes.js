import express from 'express'
import { addNewExercise } from '../controllers/exercise/exerciseController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addNewExercise)

export default router
