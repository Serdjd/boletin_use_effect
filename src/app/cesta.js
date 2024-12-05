import { useEffect, useState } from "react"

export default function Cesta() {
    const [cesta,setCesta] = useState([])
    const [text,setText] = useState("")
    function handleClick() {
        let temp = [...cesta,text]
        localStorage.setItem(1,temp)
        setCesta(temp)
        setText("")
    }

    useEffect(() => {
        let temp = localStorage.getItem(1)

        if(temp !== null) {
            setCesta(temp.split(","))
        }
    },[])
    
    return(
        <>
            <label>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <button onClick={handleClick}>Añadir al carrito</button>
            {
                cesta.map((producto,index) => {
                    return <p key={index}>{producto}</p>
                })
            }
        </>
    )
}