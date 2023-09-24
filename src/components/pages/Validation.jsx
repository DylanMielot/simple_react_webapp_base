import { ContentPage, TitlePage } from "./CarouselPage"

export default function Validation({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'validation')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage>
            {page.description}
        </TitlePage>
        <ContentPage>
            content
        </ContentPage>
    </div >
}