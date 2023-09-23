export default function Centered({ children, className = "", id = '' }) {

    return <div id={id} className={`flex justify-center items-center ${className}`}>
        {children}
    </div>
}