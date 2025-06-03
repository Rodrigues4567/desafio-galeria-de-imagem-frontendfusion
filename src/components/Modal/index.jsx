import { IoClose } from "react-icons/io5";

function Modal({ image, onClose }) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                <div className="bg-white p-5 rounded-[8px] max-w-lg w-full relative mobile:w-[90vw]">
                    <button onClick={onClose} className="absolute top-2 right-2 text-lg"><IoClose className="text-[2.6rem] text-red-500" /></button>
                    
                    <img src={image.download_url} alt={image.author} className="w-full mb-4 rounded-[5px]" />
                    <p><strong>Autor:</strong> {image.author}</p>
                    <p><strong>ID:</strong> {image.id}</p>
                    <p><strong>Dimensões:</strong> {image.width} x {image.height}</p>

                </div>
            </div>
        </>
    )
}

export default Modal
