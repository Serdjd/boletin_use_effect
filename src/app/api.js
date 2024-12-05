import { useEffect, useState } from "react";

export default function Api() {
    const [libros,setLibros] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if(!response.ok) {
                throw new Error("Esto no funciona")
            }
            return response.json()
        })
        .then((titulos) => {
            setLibros(titulos)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    return(
        <ol>
            {
                libros.map((libro) => 
                    <li key={libro.id}>{libro.title}</li>
                )
            }
        </ol>
    )
}