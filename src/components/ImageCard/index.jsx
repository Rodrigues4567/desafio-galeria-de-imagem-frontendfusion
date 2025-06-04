import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"
import { FaHeart } from "react-icons/fa"

function ImageCard({ image, onClick }) {

    const { favorites, toggleFavorite } = useContext(FavoritesContext)
    const isFavorited = favorites.some((item) => item.id === image.id)

    return (
        <>
            <div onClick={onClick} className="relative group transition-transform duration-300 hover:scale-[1.01]">

                <img className="h-[300px] w-[360px] rounded-[5px] cursor-pointer" src={image.download_url} alt={`Foto de ${image.author}`} />

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(image)
                    }}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
                >
                    <FaHeart className={`text-xl ${isFavorited ? 'text-red-500' : 'text-gray-400'}`} />
                </button>

            </div>
        </>
    )
}

export default ImageCard
