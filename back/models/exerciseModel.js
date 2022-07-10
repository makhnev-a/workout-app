import mongoose from 'mongoose'

const exerciseSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		times: {
			type: Number,
			required: true,
		},
		images: {
			before: String,
			after: String,
		},
	},
	{
		minimize: false,
		timestamps: true,
	}
)

const Exercise = mongoose.model('Exercise', exerciseSchema)
export default Exercise
