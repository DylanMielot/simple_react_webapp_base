import Clients from "./components/pages/Clients"
import Packages from "./components/pages/Packages"
import Produits from "./components/pages/Produits"
import Validation from "./components/pages/Validation"
import Administration from "./components/pages/Administration"

import VerticalNavBar from "./components/VerticalNavBar"
import Carousel from "./components/Carousel"
import CarouselPage from "./components/pages/CarouselPage"
import { links, default_link } from "./app_config"
import { useState } from "react"

function App() {

  const [active, setActive] = useState(default_link)
  const [pages, setPages] = useState([...links])

  return <div className='h-full flex'>
    <VerticalNavBar active={active} setActive={setActive} pages={pages} />

    <Carousel pages={pages} setPages={setPages} setActive={setActive}>
      <Clients pages={pages} setPages={setPages} />

      <Packages pages={pages} setPages={setPages} />

      <Produits pages={pages} setPages={setPages} />

      <Validation pages={pages} setPages={setPages} />

      <Administration pages={pages} setPages={setPages} />
    </Carousel>
  </div>
}

export default App
