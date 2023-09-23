import Neomorphism from "../utils/Neomorphism"
import Centered from "../utils/Centered"

export default function CarouselPage({ children, pages }) {

    let pageName = children.type.name
    var content = null

    // On recherche la page dans app_jsx et on charge le children
    try {
        let page = pages.filter(p => p.component.toUpperCase() == pageName.toUpperCase())
        if (page.length > 1) {
            console.error("More than 1 page with the same component name")
        } else {
            page = page[0]
        }

        if (page.isClickable) {
            content = children
        } else {
            content = (
                <Centered className="h-full font-bold">
                    Sorry, you're not allowed to access this page.
                </Centered>
            )
        }

        content = (
            <Centered className="w-full h-full snap-center" id={page.id}>
                <Neomorphism radius="40px" size={['85%', '85%']}>
                    {content}
                </Neomorphism>
            </Centered>
        )

        // Si la page n'est pas trouvé dans le app_config.jsx
    } catch (e) {
        console.error("Page not found, check your app_config.jsx")
        var content = (
            <Centered className="w-full h-full snap-center">
                <Neomorphism radius="40px" size={['85%', '85%']}>
                    <Centered className="h-full font-bold">
                        Sorry, this page doesn't exist.
                    </Centered>
                </Neomorphism>
            </Centered>
        )
    }

    return content
}