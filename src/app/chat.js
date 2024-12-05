import { useEffect, useState } from "react";
import { mensajes } from "./data";

export default function Chat() {
    const [pulsado, setPulsado] = useState()

    const [messages, setMessages] = useState([])

    const [index, setIndex] = useState(0)

    useEffect(() => {
        var interval
        if(pulsado) {
            interval = setInterval(() => {
                if (index <= mensajes.length - 1) {
                    setMessages(mensajes.slice(0,index + 1))
                    if(index < mensajes.length) {
                        setIndex(index+1)
                    }
                }
            },5000)
        }
        return () => {
            clearInterval(interval)
        }

    },[pulsado,index])

    function handleClick() {
        setPulsado(true)
    }

    return(
        <>
            <button onClick={handleClick}>Entrar al chat</button>
            {
                messages.map((message) => {
                    return <p key={message.id}>{message.name}: {message.mensaje}</p>
                })
            }
        </>
    )
}