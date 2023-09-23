import Clients from "./pages/Clients"
import Packages from "./pages/Packages"
import Produits from "./pages/Produits"
import Validation from "./pages/Validation"
import CarouselPage from "./pages/CarouselPage"
import { memo } from "react"

export default memo(function Carousel({ pages, setPages }) {

    const nbPages = pages.length

    return (
        <div className='relative w-full min-w-[500px] h-full overflow-y-hidden scroll-snapx-mandatory scroll-smooth z-0'>
            <div className={`flex h-full`} style={{ width: `${nbPages}00%` }}>

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
            </div>
        </div>
    )
})