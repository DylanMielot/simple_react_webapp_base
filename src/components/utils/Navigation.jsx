import { cloneElement, useState } from "react"
import Centered from "./Centered"

export function NavigationLink({ title, className = "", active, setActive }) {

    // use className = "selected:bg-red-600" to personalize colors

    let selectedStyle = className.split(" ").filter(item => { return item.indexOf("selected") !== -1 }).map(item => {
        return item.split(":")[1]
    }).join(" ")

    var activeStyle = active === title ? "bg-slate-600 text-[110%] " + selectedStyle : ""
    var style = "bg-slate-500 text-white h-full w-full cursor-pointer transition-all duration-200 hover:text-[110%] " + className

    return <div className={` ${style} ${activeStyle}`} onClick={() => setActive(title)}>
        <Centered className="h-full">{title}</Centered>
    </div>
}

export function Navigation({ children, className = "" }) {

    let contents = {}
    let links = []

    let defValue = Array.isArray(children) ? children[0].props.title : children.props.title

    const [active, setActive] = useState(defValue)

    if (Array.isArray(children)) {
        children.forEach((link) => {
            contents[link.props.title] = link.props.children
            links.push(cloneElement(link, { key: link.props.title, 'active': active, 'setActive': setActive }))
        })
    } else {
        links.push(cloneElement(children, { key: link.props.title, 'active': active, 'setActive': setActive }))
    }


    return <div className={`relative h-full w-full flex flex-col ${className}`}>
        <div className={`w-full h-[40px] flex justify-around`}>
            {links}
        </div>
        <div className="h-full w-full p-5">
            {contents[active]}
        </div>
    </div>
}