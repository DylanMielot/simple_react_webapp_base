//TODO
// Deplacer CarouselPage dans Carousel.jsx

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
        component: "Clients",
        isClickable: true
    },
    {
        title: "Packages",
        description: 'Paramétrage des packages',
        component: "Packages",
        isClickable: true
    },
    {
        title: "Produits",
        description: 'Paramétrage des produits hors package',
        component: "Produits",
        isClickable: true
    },
    {
        title: "Validation",
        description: 'Validation des paramètres saisis',
        component: "Validation",
        isClickable: false
    },
    {
        title: "Administration",
        description: 'Panneau d\'administration',
        component: "Administration",
        isClickable: true
    }
]

export var logo = "/images/logo.png"

export var scroll_axis = "y" // "x" ou "y"

export var smooth_scroll = false

// peut occasionner quelques bugs dans la vertical navbar si smoothscroll est activé
export var display_scrollbar = false

export var default_link = "Clients"