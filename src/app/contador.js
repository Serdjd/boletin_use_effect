import { useEffect, useState } from "react";

export default function Contador() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count
    },[count])
    function handleClick() {
        setCount(count + 1)
    }
    return(
        <div>
            <h1>Pulsador</h1>
            <label><button onClick={handleClick}>Pulsame</button> {count}</label>
        </div>
        
    )
}