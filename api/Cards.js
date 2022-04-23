const Cards = require('../models/Card.js')

const dbConnect = require('../lib/dbConnect.js')

module.exports = async function handler(request, response) {
  await dbConnect()

  const cards = await Cards.find()
  const { name } = cards[0]
  response.status(200).send(`Hello ${name} again!`)
}
