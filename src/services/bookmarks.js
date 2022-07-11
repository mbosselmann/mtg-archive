export const saveBookmarkedCard = async card => {
  try {
    const response = await fetch('api/bookmarkedCards', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    })
    if (response.ok) {
      const success = await response.json()
      return success
    } else {
      throw new Error(response.status)
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getBookmarkedCards = async () => {
  try {
    const response = await fetch('api/bookmarkedCards')
    if (response.ok) {
      const bookmarkedCards = await response.json()
      return bookmarkedCards
    } else {
      throw new Error(response.status)
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteBookmarkedCard = async _id => {
  try {
    const response = await fetch(`api/bookmarkedCards?cardid=${_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    if (response.ok) {
      const success = await response.json()
      return success
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
