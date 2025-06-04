import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="bg-[#0B1F2C] text-[#f1f1f1] py-5 px-2 mb-10 flex justify-around items-center mobile:justify-between mobile:px-4">
                <h1 className="text-2xl font-fontBold mobile:text-xl">Galeria de Imagens</h1>

                <div className="md:hidden cursor-pointer" onClick={() => setOpen(true)}>
                    <IoMenu className="text-[2.1rem]" />
                </div>

                <ul className="hidden md:flex justify-center items-center gap-8">
                    <Link to='/' className="cursor-pointer hover:text-red-400 transition-[0.3s]">Home</Link>
                    <Link to='/favoritos' className="cursor-pointer hover:text-red-400 transition-[0.3s]">Favoritos</Link>
                </ul>

                <div className={`fixed top-0 right-0 h-full w-64 bg-[#0B1F2C] text-white p-6 z-40 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end mb-6">
                        <IoClose className="text-3xl cursor-pointer" onClick={() => setOpen(false)} />
                    </div>
                    <ul className="flex flex-col gap-6">
                        <Link to='/' className="cursor-pointer hover:text-red-400 transition-[0.3s]" onClick={() => setOpen(false)}>Home</Link>
                        <Link to='/favoritos' className="cursor-pointer hover:text-red-400 transition-[0.3s]" onClick={() => setOpen(false)}>Favoritos</Link>
                    </ul>
                </div>

                {open && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30"
                        onClick={() => setOpen(false)}
                    />
                )}
            </header>
        </>
    )
}

export default Header
