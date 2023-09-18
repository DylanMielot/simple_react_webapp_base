import Neomorphism from "../utils/Neomorphism"

export default function CarouselPage({ children, id }) {

    return <div id={id} className={`w-[100%] h-full snap-center flex justify-center items-center`}>
        <Neomorphism radius="40px" size={['85%', '85%']} extras="flex justify-center items-center">
            {children}
        </Neomorphism>
    </div>
}