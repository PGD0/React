import React, { useEffect, useState } from 'react'

function Pokemon ({avatar, name}) {
    return(
        <div className="gallery">
            <img src={avatar} alt="Cinque Terre" width="600" height="400"/>
            <div className="desc">{name}</div>
        </div>
    )
}

const Galeria = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(()=>{
        const getPokemons = async (url) =>{
            let res = await fetch(url),
            json = await res.json();
            json.results.forEach(async (el) =>{
                let res = await fetch(el.url),
                json = await res.json();
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                };
                setPokemons((pokemons) => [...pokemons, pokemon])
            })
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    },[])

  return (
    <div>
         <>
            <h2>Galeria</h2>
            {pokemons.length === 0 ? (<h2>Cargando...</h2>): (pokemons.map((el, index) => <Pokemon key={index} name={el.name} avatar={el.avatar}/>))}
        </>
    </div>
  )
}

export default Galeria