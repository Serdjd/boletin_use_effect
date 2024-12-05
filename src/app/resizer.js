import { useEffect, useState } from "react";

export default function Resizer() {
    const [size,setSize] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize',() => setSize(window.innerWidth))
    },[])

    return(
        <h1>{size}</h1>
    )
}