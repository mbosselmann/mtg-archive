const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
    colors: {
      type: Array,
    },
    originalType: {
      type: String,
    },
    power: {
      type: String,
    },
    subtypes: {
      type: Array,
    },
    supertypes: {
      type: Array,
    },
    type: {
      type: Array,
    },
    rarity: {
      type: String,
    },
    types: {
      type: Array,
    },
    isBookmarked: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('Card', schema)
