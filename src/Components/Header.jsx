import logo from '../imgs/MyLogo.png';

export default function Header(){
    return (
            <header className="absolute top-0 left-0 w-full z-[60]">
                <nav className="">
                    <div className="flex justify-between items-center w-full text-white">
                        <div className="drop-shadow-[0_0_10px_white]">
                            <a href="#" className="hover:cursor-pointer "><img src={logo} alt="ByAurea logo" className='h-13 pl-10 mt-7'/></a>
                        </div>
                        <div className="flex gap-8 pr-8 drop-shadow-[0_0_10px_white]">
                            <a href="#" className="px-4 hover:cursor-pointer">Music</a>
                            <a href="#" className="px-4 hover:cursor-pointer">Language</a>
                            <a href="#" className="px-4 hover:cursor-pointer">Menu</a>
                        </div>
                    </div>
                </nav>
            </header>
    )
}
