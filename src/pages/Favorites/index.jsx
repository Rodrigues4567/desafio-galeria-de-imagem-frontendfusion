import { useContext, useState } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"
import Header from "../../layout/Header"
import ImageCard from "../../components/ImageCard"
import Modal from "../../components/Modal"
import Footer from "../../layout/Footer"

function Favorites() {

    const { favorites } = useContext(FavoritesContext)
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center flex-col mb-10 text-center">

                <h2 className="text-2xl font-bold px-4 mb-6">Fotos marcadas como favoritas</h2>

                {favorites.length === 0 ? (
                    <p className="text-center mt-10">Nenhuma imagem favoritada ainda.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center justify-center items-center px-[4rem] w-[1280px] mobile:w-[90vw] mobile:px-[0rem]">
                        {favorites.map((image) => (
                            <ImageCard key={image.id} image={image} onClick={() => setSelectedImage(image)} />
                        ))}
                    </div>
                )}

                {selectedImage && (
                    <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
                )}

            </div>
            <Footer />
        </>
    )
}

export default Favorites
