import { useEffect, useState } from "react"

export default function Contadores() {
    const [contador1, setContador1] = useState(0)

    function handleClick() {
        setContador1(contador1+1)
    }

    useEffect(() => {
        console.log("Cada render")
    })

    useEffect(() => {
        console.log("Cada vez que cambia el contador 1")
    },[contador1])

    return(
        <>
            <p>{contador1}</p>
            <button onClick={handleClick}>Incrementar contador 1</button>
        </>
    )
}