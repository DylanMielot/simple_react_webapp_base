import Clients from "./pages/Clients"
import Packages from "./pages/Packages"
import Produits from "./pages/Produits"
import Validation from "./pages/Validation"
import Administration from "./pages/Administration"
import CarouselPage from "./pages/CarouselPage"
import { memo } from "react"
import { scroll_axis } from "../app_config"

export default function Carousel({ pages, setPages }) {

    const nbPages = pages.length
    var classname = "h-full"
    var style = { width: `${nbPages}00%` }
    var scrollSnap = "scroll-snapx-mandatory"

    if (scroll_axis === "y") {
        classname = "flex-col w-full"
        style = { height: `${nbPages}00%` }
        scrollSnap = "scroll-snapy-mandatory"
    }

    return (
        <div className={`relative w-full min-w-[500px] h-full overflow-hidden ${scrollSnap} scroll-smooth z-0`}>
            <div className={`flex ${classname}`} style={style}>

                <CarouselPage pages={pages}>
                    <Clients pages={pages} setPages={setPages} />
                </CarouselPage>

                <CarouselPage pages={pages}>
                    <Packages pages={pages} setPages={setPages} />
                </CarouselPage>

                <CarouselPage pages={pages}>
                    <Produits pages={pages} setPages={setPages} />
                </CarouselPage>

                <CarouselPage pages={pages}>
                    <Validation pages={pages} setPages={setPages} />
                </CarouselPage>

                <CarouselPage pages={pages}>
                    <Administration pages={pages} setPages={setPages} />
                </CarouselPage>
            </div>
        </div>
    )
}