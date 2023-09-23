import Centered from "../utils/Centered"

export default function Clients({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'clients')[0]

    function activatePage() {
        pages.filter(p => p.id === "validation")[0].isClickable = true
        setPages([...pages])
    }

    return <div className={`w-full h-full flex flex-col `}>
        <Centered className="w-full h-[60px]">
            <h1 className="w-[60%] text-center pt-[10px] h-full text-[120%] border-b-[1px] border-black">{page.description}</h1>
        </Centered>
        <div>content</div>
        <button onClick={() => activatePage()}>Activate validation page</button>
    </div >
}