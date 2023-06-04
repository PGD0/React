import React, { useState } from 'react'

const ConversorTemp = () => {
    const [celsuis, setCelsuis] = useState('')
    const [fahrenheit, setFahrenheit] = useState('')

    // Función para convertir de Celsius a Fahrenheit
    function convertToCelsius(celsius) {
        return (celsius * 9) / 5 + 32;
    }
    // Función para convertir de Fahrenheit a Celsius
    function convertToFahrenheit(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }
    // Evento para manejar el cambio en el input de Celsius
    const handleCelsiusChange = (e) => {
        const celsiusValue = e.target.value;
        const convertedValue = convertToCelsius(celsiusValue);
        setFahrenheit(convertedValue);
    };
    // Evento para manejar el cambio en el input de Fahrenheit
    const handleFahrenheitChange = (e) => {
        const fahrenheitValue = e.target.value;
        const convertedValue = convertToFahrenheit(fahrenheitValue);
        setCelsuis(convertedValue);
    };
  return (
    <div>
        <h3>Conversor de Temperatura</h3>
        <label htmlFor='celsius'>Celsius: {celsuis}</label>
        <input name='celsius' type='number' placeholder='Celsius' onChange={handleCelsiusChange}></input>
        <br></br>
        <label htmlFor='fahrenheit'>Fahrenheit: {fahrenheit}</label>
        <input name='fahrenheit' type='number' placeholder='Fahrenheit' onChange={handleFahrenheitChange}></input>
    </div>
  )
}

export default ConversorTemp