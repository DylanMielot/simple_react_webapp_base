import { ContentPage, TitlePage } from "./CarouselPage"

export default function Packages({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'packages')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage>
            {page.description}
        </TitlePage>
        <ContentPage>
            content
        </ContentPage>
    </div >
}