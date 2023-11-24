import { scroll_axis, smooth_scroll, display_scrollbar } from "../app_config"

import CarouselPage from "./pages/CarouselPage"

export default function Carousel({ pages, setPages, setActive, children }) {

    // default values
    var pagesCount = Array.isArray(children) ? children.length : 1
    var classname = "h-full"
    var style = { width: `${pagesCount}00%` }
    var scrollSnap = "scroll-snapx-mandatory"
    var smooth = smooth_scroll ? "scroll-smooth" : ""
    var scrollbar = "overflow-hidden"

    if (scroll_axis === "y") {
        classname = "flex-col w-full"
        style = { height: `${pagesCount}00%` }
        scrollSnap = "scroll-snapy-mandatory"
    }

    if (display_scrollbar) {
        if (scroll_axis === "y") {
            scrollbar = "overflow-x-hidden"
        } else if (scroll_axis === "x") {
            scrollbar = "overflow-y-hidden"
        }
    }

    // Ajout d'un composant CarouselPage aux childrens et des props
    let childs = []
    try {
        if (Array.isArray(children)) {
            children.forEach((link) => {
                childs.push(<CarouselPage key={link.type.name} setPages={setPages} pages={pages} setActive={setActive}>{link}</CarouselPage>)
            })
        } else {
            childs.push(<CarouselPage key={children.type.name} pages={pages} setPages={setPages} setActive={setActive}>{children}</CarouselPage>)
        }
    } catch (e) {
        console.error("Erreur lors du chargement des composants du carousel")
        console.error(e)
    }

    return (
        <div id="carousel" className={`relative w-full min-w-[500px] h-full ${scrollbar} ${scrollSnap} ${smooth} z-0`}>
            <div className={`flex ${classname}`} style={style}>
                {childs}
            </div>
        </div>
    )
}