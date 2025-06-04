import { useEffect, useState } from "react"
import Header from "../../layout/Header"
import ImageCard from "../../components/ImageCard"
import Modal from "../../components/Modal"
import Footer from "../../layout/Footer"

function Home() {

    const [api, setApi] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const [loading, setLoading] = useState(true)

    async function showApi() {
        try {
            const res = await fetch("https://picsum.photos/v2/list?page=1&limit=30")
            const showRes = await res.json()
    
            console.log(showRes)
            setApi(() => showRes)
        }
        catch(err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        showApi()
    }, [])

    return (
        <>
            <Header />
            <div className="flex justify-center items-center mb-10">
                {loading ? (
                    <div className="flex justify-center items-center h-[80vh]">
                        <p className="text-xl font-semibold animate-pulse">Carregando imagens...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center justify-center items-center px-[4rem] w-[1280px] mobile:w-[90vw] mobile:px-[0rem]">
                        {api.map((image) => (
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

export default Home
