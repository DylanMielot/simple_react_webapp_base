import { ContentPage, TitlePage } from "./CarouselPage"

export default function Produits({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'produits')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage>
            {page.description}
        </TitlePage>
        <ContentPage>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem cumque vitae ducimus illum, eaque id similique laborum repellat provident veniam recusandae ratione possimus aut asperiores reiciendis accusamus eveniet qui!
            Alias quasi, iste labore totam sint minus provident nam accusantium ea. Praesentium inventore officiis nulla deleniti ab quis ipsam a dolorem vero. Quos illum nemo doloremque quo ipsum asperiores temporibus.
            Illum facere aspernatur doloremque rerum eveniet ullam. Est repudiandae tenetur velit vitae quis quas quia. Consequuntur nesciunt facilis vitae laudantium, voluptates sapiente perspiciatis ducimus excepturi, id dignissimos dolore, hic eveniet!
        </ContentPage>
    </div >
}