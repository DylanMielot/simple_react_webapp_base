export function NavigationLink({ title }) {
    return <div className="h-full w-full flex justify-center items-center cursor-pointer text-white hover:bg-slate-600 hover:text-lg transition-all duration-200">
        <p>{title}</p>
    </div>
}


export function Navigation({ children, className = "" }) {

    return <div className={` bg-slate-500 absolute bottom-0 h-[40px] w-full flex justify-around gap-2 ${className}`}>
        {children}
    </div>
}