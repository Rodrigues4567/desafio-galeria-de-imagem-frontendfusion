import { createContext, useState } from "react"

export const FavoritesContext = createContext()

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  function toggleFavorite(image) {
    const exists = favorites.some((item) => item.id === image.id)
    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== image.id))
    } else {
      setFavorites([...favorites, image])
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider
