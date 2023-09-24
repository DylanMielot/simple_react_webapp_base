import { ContentPage, TitlePage } from "./CarouselPage"
import { Navigation, NavigationLink } from "../utils/Navigation"

export default function Administration({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'administration')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage className=" border-b-[0px]">
            {page.description}
        </TitlePage>
        <ContentPage className="relative rounded-[20px] flex flex-col">
            <Navigation className="top-0">
                <NavigationLink title="Create new page" />
                <NavigationLink title="Manage pages" />
            </Navigation>
            <div className="bg-red-500 w-full h-full"></div>
        </ContentPage>
    </div >
}
