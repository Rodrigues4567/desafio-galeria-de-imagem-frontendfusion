
function ImageCard({ image, onClick }) {
    return (
        <>
            <div onClick={onClick}>
                <img className="h-[300px] w-[360px] rounded-[5px] cursor-pointer" src={image.download_url} alt={`Foto de ${image.author}`} />
            </div>
        </>
    )
}

export default ImageCard
