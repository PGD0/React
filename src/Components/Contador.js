import React, { useState } from 'react'

const Contador = () => {
    const [cont, setCont] = useState(0)
    const aumentar = () => {
        setCont(cont + 1)
    }
    const restar = () => {
        setCont(cont - 1)
    }
  return (
    <div>
        <h3>Contador</h3>
        <h2>{cont}</h2>
        <button onClick={() => aumentar()}>+</button>
        <button onClick={() => restar()}>-</button>
    </div>
  )
}

export default Contador