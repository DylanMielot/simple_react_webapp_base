export default function Packages({ pages, setPages }) {

    function remove() {
        setPages([...pages.filter(p => p.id !== 'validation')])
    }
    function add() {
        setPages([...pages, { title: "Validation", id: "validation", isClickable: false }])
    }

    return <div className="flex flex-col">
        <button className=" text-red-700" onClick={() => { remove() }}>remove validation part</button>
        <button className=" text-green-700" onClick={() => { add() }}>add validation part</button>
    </div>
}