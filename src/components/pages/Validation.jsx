import Centered from "../utils/Centered"

export default function Validation({ pages, setPages }) {

    var page = pages.filter(p => p.id == 'validation')[0]

    return <div className={`w-full h-full flex flex-col `}>
        <Centered className="w-full h-[60px]">
            <h1 className="w-[60%] text-center pt-[10px] h-full text-[120%] border-b-[1px] border-black">{page.description}</h1>
        </Centered>
        <div className=" text-red-700 h-full">content</div>
    </div >
}