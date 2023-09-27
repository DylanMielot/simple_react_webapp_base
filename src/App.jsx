import VerticalNavBar from "./components/VerticalNavBar"
import Carousel from "./components/Carousel"
import { links, default_link } from "./app_config"
import { useState } from "react"

function App() {

  const [active, setActive] = useState(default_link)
  const [pages, setPages] = useState([...links])

  return <div className='h-full flex'>
    <VerticalNavBar active={active} setActive={setActive} pages={pages} />
    <Carousel pages={pages} setPages={setPages} setActive={setActive} />
  </div>
}

export default App
