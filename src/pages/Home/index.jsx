import { useEffect, useState } from "react"
import Header from "../../layout/Header"

function Home() {

    const [api, setApi] = useState([])

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
    }

    useEffect(() => {
        showApi()
    }, [])

    return (
        <>
            <div>
                <Header />
                <div>
                    {api.map((image) => (
                        <div key={image.id}>
                            <img className="h-[300px] w-[390px]" src={image.download_url} alt={`Foto de ${image.author}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
