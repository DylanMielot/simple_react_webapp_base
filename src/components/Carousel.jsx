import Clients from "./pages/Clients"
import Packages from "./pages/Packages"
import Produits from "./pages/Produits"
import Validation from "./pages/Validation"
import CarouselPage from "./pages/CarouselPage"

export default function Carousel({ pages, setPages }) {

    const nbPages = 4

    return (
        <div className='relative w-full min-w-[500px] h-full overflow-hidden scroll-snapx-mandatory scroll-smooth z-0'>
            <div className={`flex h-full`} style={{ width: `${nbPages}00%` }}>

                <CarouselPage id="clients">
                    <Clients pages={pages} setPages={setPages} />
                </CarouselPage>

                <CarouselPage id="packages">
                    <Packages pages={pages} setPages={setPages} />
                </CarouselPage>

                <CarouselPage id="produits">
                    <Produits />
                </CarouselPage>

                <CarouselPage id="validation">
                    <Validation />
                </CarouselPage>
            </div>
        </div>
    )
}