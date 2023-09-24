import { ContentPage, TitlePage } from "./CarouselPage"
import { Navigation, NavigationLink } from "../utils/Navigation"

export default function Administration({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'administration')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage className="border-b-[0px]">
            {page.description}
        </TitlePage>

        <ContentPage className="relative">
            <Navigation>
                <NavigationLink title="Create new page">
                    <p>test create new page</p>
                </NavigationLink>
                <NavigationLink title="Manage pages">
                    <p>test manage pages</p>
                </NavigationLink>
                <NavigationLink title="Manage access">
                    <p>Manage access</p>
                </NavigationLink>
            </Navigation>
        </ContentPage>
    </div >
}
