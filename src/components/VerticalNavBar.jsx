import { logo_link } from "../app_config"

export default function VerticalNavBar({ active, setActive, pages }) {

    return <div className=' hidden md:flex relative h-full min-w-[200px] w-[25%] shadow-[5px_0_20px_grey] flex-col overflow-y-auto z-[1] bg-gray-400'>

        {/* logo */}
        <img className="p-5" src={logo_link} alt="" />

        {/* Pages définis dans app_config.js */}
        <div className="h-full w-full flex flex-col justify-center items-center">
            {pages.map((link, index) => {

                return (
                    <div key={index} className={`${active == link.id ? "bg-slate-600 text-white text-[120%]" : " text-[100%]"} w-full min-h-[50px] h-[15%] max-h-[90px] font-bold transition-all duration-300 ${link.isClickable && "hover:text-[120%]"}`} onClick={() => link.isClickable && setActive(link.id)}>

                        <a href={`#${link.id}`} className={`w-full h-full flex justify-center items-center ${link.isClickable ? "cursor-pointer" : "pointer-events-none cursor-not-allowed text-gray-600"}`}>
                            <span>{link.title}</span>
                        </a>
                    </div>
                )
            })}
        </div>
    </div>
}