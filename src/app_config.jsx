//TODO
//- supprimer la prop id, utiliser la prop component a la place
//- dans carouselPage, ne plus passer la prop pages, la donner seulement au parent Caroussel, et la faire passer a tous les children via un clone (cf TabNavigation) + ajouter une vérification dans CarousselPage, pages != null + verification pour chaque prop des pages, ajouter une valeur par défaut ""


// Pour ajouter une nouvelle page :
// - ajouter un objet à "links" et le renseigner
// - aller dans Carousel.jsx et ajouter un composant CarouselPage
// - l'id renseigné ici doit être identique au nom du composant page (sauf majuscules)

//title => label dans la verticalNavBar
//id => utilisé pour la navigation entre composant dans la navbar
//component => nom du composant React
//isClickable => défini si la page est accessible ou non
export var links = [
    {
        title: "Clients",
        description: 'Paramétrage des clients',
        id: "clients",
        component: "Clients",
        isClickable: true
    },
    {
        title: "Packages",
        description: 'Paramétrage des packages',
        id: "packages",
        component: "Packages",
        isClickable: true
    },
    {
        title: "Produits",
        description: 'Paramétrage des produits hors package',
        id: "produits",
        component: "Produits",
        isClickable: true
    },
    {
        title: "Validation",
        description: 'Validation des paramètres saisis',
        id: "validation",
        component: "Validation",
        isClickable: false
    },
    {
        title: "Administration",
        description: 'Panneau d\'administration',
        id: "administration",
        component: "Administration",
        isClickable: true
    }
]

export var logo = "/images/logo.png"

export var scroll_axis = "y" // "x" ou "y"

export var smooth_scroll = false

export var display_scrollbar = false

export var default_link = "clients"