import { useEffect, useRef } from "react";

export default function Neomorphism({ children, radius = '50px', size = ['80%', '80%'], background = "#d1d5db", shadow = "20px 20px 60px #b2b5ba, -20px -20px 60px #f0f5fc", extras = "" }) {

    return <div className={`transition-all duration-200 ${extras}`} style={{
        width: size[0],
        height: size[1],
        borderRadius: radius,
        background: background,
        boxShadow: shadow
    }}>
        {children}
    </div>
}