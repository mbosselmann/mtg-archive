import mongoose from 'mongoose'

export const BookmarkedCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  colors: {
    type: Array,
    required: false,
  },
  originalType: {
    type: String,
    required: false,
  },
  power: {
    type: String,
    required: false,
  },
  subtypes: {
    type: Array,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  rarity: {
    type: String,
    required: false,
  },
  types: {
    type: Array,
    required: false,
  },
  isBookmarked: {
    type: Boolean,
    required: true,
  },
  savedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
})

export const BookmarkedCard = mongoose.model(
  'BookmarkedCard',
  BookmarkedCardSchema,
  'bookmarkedCards'
)
