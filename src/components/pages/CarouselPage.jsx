import Centered from "../utils/Centered"
import { useEffect, useRef } from "react"

export function TitlePage({ children, className = "" }) {
    return <Centered className="w-full h-[60px] bg-slate-400">
        <p className={`text-[120%] ${className}`}>
            {children}
        </p>
    </Centered>
}

export function ContentPage({ children, className = "" }) {
    return <div className={`w-full h-full p-5 overflow-y-auto overflow-x-hidden ${className}`}>
        {children}
    </div>
}

export default function CarouselPage({ children, pages, setActive }) {

    var contentBlock = useRef("")
    let pageName = children.type.name
    var content = null
    var page = pages.filter(p => p.component.toUpperCase() == pageName.toUpperCase())

    /**
     * selection de la page actuelle en tant que page active 
     */
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    useEffect(() => {
        document.querySelector("#carousel").addEventListener('scroll', () => {
            if (isInViewport(contentBlock.current)) {
                setActive(page.id)
            }
        })
    }, [])
    /**
     * FIN
     */


    /**
     * Chargement du composant
     */
    try {
        if (page.length > 1) {
            throw new Error("More than 1 page with the same component name, check your app_config.jsx")
        } else if (page.length < 1) {
            throw new Error("Page not found, check your app_config.jsx")
        } else {
            page = page[0]
        }

        if (page.isClickable) {
            content = children
        } else {
            throw new Error("You're not allowed to access this page. Please contact your administrator system.")
        }
    } catch (e) {
        var content = <Centered className="h-full font-bold text-red-600">{e.message}</Centered>
    }
    /**
     * FIN
     */



    /**
     * Renderer
     */
    return <div className="h-full w-full" ref={contentBlock}>
        <Centered className="w-full h-full max-h-[100vh] snap-center" id={page.id}>
            {content}
        </Centered>
    </div>
    /**
     * FIN
     */
}