import { ContentPage, TitlePage } from "./CarouselPage"

export default function Administration({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'administration')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage>
            {page.description}
        </TitlePage>
        <ContentPage>
            content
        </ContentPage>
    </div >
}