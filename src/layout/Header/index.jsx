
function Header() {
    return (
        <>
            <div className="bg-[#0B1F2C] text-[#f1f1f1] py-5 px-2 flex justify-around items-center">
                <h1 className="text-2xl font-fontBold">Galeria de Imagens</h1>
                <ul className="flex justify-center items-center gap-8">
                    <li>Home</li>
                    <li>Favoritos</li>
                </ul>
            </div>
        </>
    )
}

export default Header
