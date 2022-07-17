import connectToMongodb from './_data/connect-to-mongodb.js'
import { BookmarkedCard } from './_data/BookmarkedCard.js'

const handler = async (request, response) => {
  try {
    await connectToMongodb()
    if (request.method === 'GET') {
      const bookmarkedCards = await BookmarkedCard.find({})
      return response.json(bookmarkedCards)
    } else if (request.method === 'POST') {
      const newBookmarkedCard = new BookmarkedCard({
        name: request.body.name,
        text: request.body.text,
        image: request.body.image,
        colors: request.body.colors,
        originalType: request.body.originalType,
        power: request.body.power,
        subtypes: request.body.subtypes,
        type: request.body.type,
        rarity: request.body.rarity,
        types: request.body.types,
        isBookmarked: request.body.isBookmarked,
        savedAt: Date.now(),
      })
      await newBookmarkedCard.save()
      return response
        .status(200)
        .json({ message: 'Ok', card: newBookmarkedCard })
    } else if (request.method === 'DELETE') {
      if (request.query.cardid) {
        const searchTerm = request.query.cardid
        const deletedCard = await BookmarkedCard.findOneAndDelete(searchTerm)
        return response.json(deletedCard)
      } else {
        const deleteAllCards = await BookmarkedCard.deleteMany({})
        return response.json(deleteAllCards)
      }
    } else {
      throw new Error()
    }
  } catch (error) {
    return response.json({ message: error.message })
  }
}

export default handler
