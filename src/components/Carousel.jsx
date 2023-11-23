import Clients from "./pages/Clients"
import Packages from "./pages/Packages"
import Produits from "./pages/Produits"
import Validation from "./pages/Validation"
import Administration from "./pages/Administration"
import CarouselPage from "./pages/CarouselPage"
import { scroll_axis, smooth_scroll, display_scrollbar } from "../app_config"

function CarouselComponent({ children }) {

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

    return <div id="carousel" className={`relative w-full min-w-[500px] h-full ${scrollbar} ${scrollSnap} ${smooth} z-0`}>
        <div className={`flex ${classname}`} style={style}>
            {children}
        </div>
    </div>
}

export default function Carousel({ pages, setPages, setActive }) {

    return (
        <CarouselComponent>
            <CarouselPage pages={pages} setActive={setActive}>
                <Clients pages={pages} setPages={setPages} />
            </CarouselPage>

            <CarouselPage pages={pages} setActive={setActive}>
                <Packages pages={pages} setPages={setPages} />
            </CarouselPage>

            <CarouselPage pages={pages} setActive={setActive}>
                <Produits pages={pages} setPages={setPages} />
            </CarouselPage>

            <CarouselPage pages={pages} setActive={setActive}>
                <Validation pages={pages} setPages={setPages} />
            </CarouselPage>

            <CarouselPage pages={pages} setActive={setActive}>
                <Administration pages={pages} setPages={setPages} />
            </CarouselPage>
        </CarouselComponent>
    )
}