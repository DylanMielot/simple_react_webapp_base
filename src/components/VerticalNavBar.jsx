import { logo } from "../app_config"
import Centered from "./utils/Centered"

export default function VerticalNavBar({ active, setActive, pages }) {

    return <div className=' hidden md:flex relative h-full min-w-[200px] w-[25%] shadow-[5px_0_20px_grey] flex-col overflow-y-auto z-[1] bg-gray-400'>

        {/* logo */}
        <img className="p-5" src={logo} alt="" />

        {/* Pages définis dans app_config.js */}
        <Centered className="h-full flex-col">
            {pages.map((link, index) => {

                var activeStyle = "text-[100%]"
                var hoverStyle = "hover:text-[120%]"
                var buttonStyle = "w-full h-full flex justify-center items-center cursor-pointer"
                var style = "w-full min-h-[50px] h-[15%] max-h-[90px] font-bold transition-all duration-300"
                if (active === link.id) {
                    activeStyle = "bg-slate-600 text-white text-[120%]"
                }
                if (!link.isClickable) {
                    hoverStyle = ""
                    buttonStyle = "w-full h-full flex justify-center items-center pointer-events-none cursor-not-allowed text-gray-600"
                }

                return (
                    <div key={index} className={`${style} ${activeStyle} ${hoverStyle}`} onClick={() => link.isClickable && setActive(link.id)}>

                        <a href={`#${link.id}`} className={`${buttonStyle}`}>
                            <span>{link.title}</span>
                        </a>
                    </div>
                )
            })}
        </Centered>
    </div>
}