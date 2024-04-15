import './App.css'
import { Formulario } from './Formulario.jsx'
import { Lista } from './Lista.jsx'
import { useState, useEffect } from 'react'

export function App () {
  const [peticiones, setPeticiones] = useState([])
  const [cargando, setCargando] = useState(false)
  const [submiteado, setSubmiteado] = useState(false)

  useEffect( () => {
    setTimeout(() => {
      fetch("http://127.0.0.1:3001/api")
        .then((response) => response.json())
        .then((json) => {
          console.log('json recibido de la db', json)
          setPeticiones(json)})
      setCargando(true)
    }, 3000);
  },[submiteado])

  return (
    <section className='App'>
      <Formulario peticiones={peticiones} setPeticiones={setPeticiones} setSubmiteado={setSubmiteado} submiteado={submiteado}/>
      {
        !cargando ?
        <section className='lista'>Cargando peticiones</section> :
        <Lista peticiones={peticiones}/>
      }      
    </section>
  )
}