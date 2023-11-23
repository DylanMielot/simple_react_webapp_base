import Centered from "../utils/Centered"
import { ContentPage, TitlePage } from "./CarouselPage"

export default function Clients({ pages, setPages }) {

    var page = pages.filter(p => p.component == 'Clients')[0]

    function activatePage() {
        pages.filter(p => p.id === "validation")[0].isClickable = true
        setPages([...pages])
    }

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage>
            {page.description}
        </TitlePage>
        <ContentPage>
            <Centered className="h-full">
                <button onClick={() => activatePage()}>Activate validation page</button>
            </Centered>
        </ContentPage>
    </div >
}