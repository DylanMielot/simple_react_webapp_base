import { ContentPage, TitlePage } from "./CarouselPage"
import { Navigation, NavigationTab } from "../utils/TabsNavigation"

export default function Administration({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'administration')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage className="border-b-[0px]">
            {page.description}
        </TitlePage>

        <ContentPage className="relative">
            <Navigation>
                <NavigationTab title="Create new page">
                    <p>test create new page</p>
                </NavigationTab>
                <NavigationTab title="Manage pages">
                    <p>test manage pages</p>
                </NavigationTab>
                <NavigationTab title="Manage access">
                    <p>Manage access</p>
                </NavigationTab>
            </Navigation>
        </ContentPage>
    </div >
}
