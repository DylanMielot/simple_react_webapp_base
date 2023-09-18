export default function VerticalNavBar({ active, setActive, pages }) {

    return <div className=' hidden md:flex relative h-full w-[400px] shadow-[5px_0_20px_grey] flex-col gap-1 overflow-y-auto z-[1] bg-gray-400'>

        {/* logo */}
        <img className="p-5" src="/images/logo.png" alt="" />

        {/* Pages définis dans app_config.js */}
        <div className="h-full w-full flex flex-col justify-center items-center">
            {pages.map((link, index) => {

                return (
                    <div key={index} className={`${active == link.id ? "bg-slate-600 text-white text-xl" : ""} w-full min-h-[50px] h-[20%] font-bold transition-all duration-300 ${link.isClickable && "hover:text-xl"}`} onClick={() => link.isClickable && setActive(link.id)}>

                        <a href={`#${link.id}`} className={`w-full h-full flex justify-center items-center ${link.isClickable ? "cursor-pointer" : "pointer-events-none cursor-not-allowed text-gray-600"}`}>
                            <span>{link.title}</span>
                        </a>
                    </div>
                )
            })}
        </div>
    </div>
}