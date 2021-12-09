
import { useState } from 'react'

function ComponenteUseEffect({ max, inicial}) {
    const [ contador, setContador ] = useState(inicial)

    const handleSuma = () => {
       contador < max ?  setContador(contador + 1) : alert ('compra maxima')
    }

    const handleResta = () => {
        contador > inicial ?  setContador(contador - 1) : alert ('compra minima')
    }



    return (
        <div>
            <p>{contador}</p>
            <button onClick={handleSuma}>Click +</button>
            <button onClick={handleResta}>Click -</button>
            
        </div>
    )
}

export default ComponenteUseEffect
