import { useEffect } from "react"

export default function Mensaje() {
    useEffect(() => {
        console.log("El componente se ha montado")
    },[]);
    return(
        <h1>Componente 1</h1>
    )
}