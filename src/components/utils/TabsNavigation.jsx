import { cloneElement, useState } from "react"
import Centered from "./Centered"

export function NavigationTab({ title, className = "", active, setActive }) {

    var activeStyle = active === title ? "bg-slate-600 text-[110%]" : ""
    var style = "bg-slate-500 text-white h-full w-full cursor-pointer transition-all duration-200 hover:text-[110%]" + className

    return <div className={` ${style} ${activeStyle}`} onClick={() => setActive(title)}>
        <Centered className="h-full">{title}</Centered>
    </div>
}

export function Navigation({ children, className = "" }) {

    let contents = {} // contenu a afficher
    let links = [] // tabs

    // tab sélectionné par défaut
    let defValue = Array.isArray(children) ? children[0].props.title : children.props.title

    const [active, setActive] = useState(defValue)

    try {
        if (Array.isArray(children)) {
            children.forEach((link) => {
                contents[link.props.title] = link.props.children
                links.push(cloneElement(link, { key: link.props.title, 'active': active, 'setActive': setActive }))
            })
        } else {
            contents[children.props.title] = children.props.children
            links.push(cloneElement(children, { key: link.props.title, 'active': active, 'setActive': setActive }))
        }
    } catch (e) {
        console.error("Erreur lors du chargement du composant NavigationTab")
        console.error(e)
    }


    return <div className={`relative h-full w-full flex flex-col ${className}`}>
        <div className={`w-full h-[40px] flex justify-around`}>
            {links}
        </div>
        <div className="h-full w-full p-5 overflow-y-auto overflow-x-hidden">
            {contents[active]}
        </div>
    </div>
}