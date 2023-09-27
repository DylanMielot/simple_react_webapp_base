import { ContentPage, TitlePage } from "./CarouselPage"
import { Navigation, NavigationTab } from "../utils/TabsNavigation"

export default function Packages({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'packages')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <TitlePage>
            {page.description}
        </TitlePage>
        <ContentPage>
            <Navigation>
                <NavigationTab title="Package 70000">
                    <p>Contenu package 70000 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, est eum facere suscipit corrupti sint nam nesciunt veritatis repellat aliquam possimus non modi porro quisquam eaque ipsum laudantium deserunt odit.
                        Laborum, omnis aliquam. Hic, odit optio! Ipsa maiores voluptates ab, minus sequi inventore consectetur quam unde, perspiciatis ad sunt laudantium qui quod, sed ea? Corporis distinctio perferendis deserunt obcaecati rem?
                        Perferendis et, sit asperiores explicabo totam nostrum veritatis voluptates? Ut tempore ex harum ullam, eius repellat nostrum. Nobis magni inventore voluptates quis ea obcaecati iure voluptatem atque voluptate? Perferendis, esse.
                        Earum fugit saepe architecto, itaque corporis error mollitia, nisi dignissimos voluptas optio non incidunt similique deleniti excepturi fugiat? Corporis impedit suscipit laborum voluptates aliquid. Ad quam voluptate aliquid necessitatibus earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur nemo molestiae odio nihil consequuntur dolore accusantium sapiente quisquam itaque optio minima quibusdam dicta quod quam facilis sed, pariatur iure!
                        Fugit iste ipsum sit repellendus vel, optio nobis similique delectus itaque ipsa dolores velit. Expedita soluta quidem modi sapiente nihil eum vitae. Obcaecati architecto animi dolor sint ad eius reiciendis.
                        Hic voluptatum autem a suscipit fugiat, culpa vel laborum, sunt facere dignissimos ex incidunt necessitatibus, praesentium non expedita similique quisquam qui? Voluptatibus necessitatibus alias accusamus delectus culpa temporibus eum et!
                        Veritatis labore, nulla accusantium possimus molestias aliquam excepturi minus ad dolorum ut nesciunt, omnis at numquam delectus voluptate corrupti unde, molestiae dignissimos debitis illo! Hic deleniti velit ducimus nostrum placeat!
                        Nam quas corporis ratione blanditiis soluta amet nemo, labore asperiores incidunt quisquam at error rerum iusto cum? Recusandae atque sit debitis illo facere quisquam, nam harum ratione alias perferendis molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea quam possimus accusamus cum ullam tempore quis, ratione esse laboriosam quos hic! Quaerat reprehenderit unde a, at illum nihil amet?
                        Tempore, harum voluptatibus! Mollitia similique delectus voluptatum illo. Quam dolores aperiam soluta quaerat. Blanditiis quas, dolor temporibus labore officia voluptas tempora esse? Ex dolorum atque consequuntur suscipit aliquam laudantium quaerat?
                        Ipsam, temporibus perspiciatis asperiores officia inventore ratione exercitationem excepturi voluptatem harum doloribus repellat soluta ipsum minima sed quos rem voluptatum nostrum iure reiciendis. Iste velit in quo excepturi fuga. Necessitatibus?
                        Ullam excepturi nihil sint! Aspernatur nobis adipisci veniam autem numquam quam laboriosam culpa eligendi modi reprehenderit quo, obcaecati optio. Nihil, necessitatibus tempore. Nulla veritatis earum dolorum at iste ex beatae.
                        Pariatur, minima repellat. Ab quod molestias consequatur dignissimos asperiores necessitatibus vitae officia natus veritatis dolorum rem et quam exercitationem similique, tempore modi animi corporis reprehenderit ullam tempora rerum omnis explicabo!</p>
                </NavigationTab>
                <NavigationTab title="Package 70010">
                    <p>Contenu package 70010 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sint explicabo quas quae sit nulla, assumenda, quia fugit saepe repellat eos aliquid eligendi similique odit accusamus tempora fuga, ea quisquam.
                        Accusamus cumque quaerat sint in quos ullam. Deleniti, nobis mollitia. Veritatis at enim minus officia deserunt ratione itaque iure, dolor saepe necessitatibus ipsam, consequuntur a? Eligendi ducimus iste a consectetur!
                        Mollitia, reprehenderit animi distinctio dolorum molestiae iure sit cupiditate ipsam, saepe facere nemo quis tempora corporis debitis nostrum neque eius minima dignissimos eligendi architecto! Beatae saepe quas facilis exercitationem maiores!</p>
                </NavigationTab>
                <NavigationTab title="Package 70300">
                    <p>Contenu package 70300 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sint explicabo quas quae sit nulla, assumenda, quia fugit saepe repellat eos aliquid eligendi similique odit accusamus tempora fuga, ea quisquam.
                        Accusamus cumque quaerat sint in quos ullam. Deleniti, nobis mollitia. Veritatis at enim minus officia deserunt ratione itaque iure, dolor saepe necessitatibus ipsam, consequuntur a? Eligendi ducimus iste a consectetur!
                        Mollitia, reprehenderit animi distinctio dolorum molestiae iure sit cupiditate ipsam, saepe facere nemo quis tempora corporis debitis nostrum neque eius minima dignissimos eligendi architecto! Beatae saepe quas facilis exercitationem maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at saepe corporis hic id, natus voluptatum tenetur aperiam soluta possimus aliquid sapiente corrupti, rerum animi nulla. Veritatis labore quibusdam magni!</p>
                </NavigationTab>
                <NavigationTab title="Package 70310">
                    <p>Contenu package 70310 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sint explicabo quas quae sit nulla, assumenda, quia fugit saepe repellat eos aliquid eligendi similique odit accusamus tempora fuga, ea quisquam.
                        Accusamus cumque quaerat sint in quos ullam. Deleniti, nobis mollitia. Veritatis at enim minus officia deserunt ratione itaque iure, dolor saepe necessitatibus ipsam, consequuntur a? Eligendi ducimus iste a consectetur!
                        Mollitia, reprehenderit animi distinctio dolorum molestiae iure sit cupiditate ipsam, saepe facere nemo quis tempora corporis debitis nostrum neque eius minima dignissimos eligendi architecto! Beatae saepe quas facilis exercitationem maiores!</p>
                </NavigationTab>
            </Navigation>
        </ContentPage>
    </div >
}