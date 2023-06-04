import React, { useState } from 'react'

const ListaDeTareas = () => {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    const addList = () => {
        setList([...list, input])
    }
    const deleteList = (i) => {
        setList(list.filter((list, index) => index !== i))
    }
  return (
    <div>
        <h3>Lista de Tareas</h3>
        <input type='text' placeholder='Digite su tarea' onChange={(e)=> setInput(e.target.value)}></input>
        <button type='submit' onClick={() => addList()}>Enviar</button>
        <div>
            <ul>
                {input ? list.map((list, index) => (
                    <li key={index}>{list} <button onClick={() => deleteList(index)}>DELETE</button></li>
                )): "Digite una tarea"}
            </ul>
        </div>
    </div>
  )
}

export default ListaDeTareas