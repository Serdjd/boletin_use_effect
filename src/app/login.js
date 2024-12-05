import { useEffect } from "react"

export default function Login() {
    useEffect(() => {
        localStorage.setItem("Agapito","Agapitodisousand")
    })

    function onSubmit(e) {
        const name = e.get("usuario")
        let password = localStorage.getItem(name)
        if(password == e.get("password")) {
            alert('Bienvenido: '+name)
        }
        else {
            alert("Te has cagado")
        }
    }

    return(
        <form action={onSubmit}>
            <label>Usuario: <input type="text" name="usuario"></input></label>
            <br/>
            <label>Contraseña: <input type="text" name="password"></input></label>
            <br/>
            <button type="submit">Login</button>
        </form>
    )
}