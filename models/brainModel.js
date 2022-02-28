import mongoose, { models } from 'mongoose'

const brainSchema = mongoose.Schema(
  {
   
    brain: {
      type: Number,
      default: 0,
    },
  
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Brain || mongoose.model('Brain', brainSchema)
