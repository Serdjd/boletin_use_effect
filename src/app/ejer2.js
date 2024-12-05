import { useEffect } from "react"

export default function Titulo() {
    useEffect(() => {
        document.title = "Titulo personalizado"
    },[]);
    
    return(
        <h1>Titulo</h1>
    )
}