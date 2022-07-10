import express from 'express'
import { addNewWorkout } from '../controllers/workout/workoutController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addNewWorkout)

export default router
