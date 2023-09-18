export default function Clients({ pages, setPages }) {

    function activate() {
        pages.filter(p => p.id == 'validation')[0].isClickable = true
        setPages([...pages])
    }

    return <button className=" text-red-700" onClick={() => { activate() }}>Active validation part</button>
}