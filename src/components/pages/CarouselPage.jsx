import Neomorphism from "../utils/Neomorphism"
import Centered from "../utils/Centered"

export function TitlePage({ children, className = "" }) {
    return <Centered className="w-full h-[60px]">
        <h1 className={`w-[60%] text-center pt-[10px] h-full text-[120%] border-b-[1px] border-black ${className}`}>
            {children}
        </h1>
    </Centered>
}

export function ContentPage({ children, className = "" }) {
    return <div className={`w-full h-full overflow-y-auto overflow-x-hidden ${className}`}>
        {children}
    </div>
}

export default function CarouselPage({ children, pages }) {

    let pageName = children.type.name
    var content = null
    var page = pages.filter(p => p.component.toUpperCase() == pageName.toUpperCase())

    // On recherche la page dans app_jsx et on charge le children
    try {
        if (page.length > 1) {
            throw new Error("More than 1 page with the same component name, check your app_config.jsx")
        } else if (page.length < 1) {
            throw new Error("Page not found, check your app_config.jsx")
        } else {
            page = page[0]
        }

        if (page.isClickable) {
            content = children
        } else {
            throw new Error("You're not allowed to access this page. Please contact your administrator system.")
        }

        // Si la page n'est pas trouvé dans le app_config.jsx
    } catch (e) {
        // console.error(e)
        var content = <Centered className="h-full font-bold text-red-600">{e.message}</Centered>
    }

    return <Centered className="w-full h-full max-h-[100vh] snap-center" id={page.id}>
        <Neomorphism radius="20px" size={['90%', '90%']}>
            {content}
        </Neomorphism>
    </Centered>
}