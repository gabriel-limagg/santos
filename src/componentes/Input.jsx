import React, { useState } from 'react'
import { jogadores } from './Dados'

function Input() {
    const [jogadoresPesquisados, setJogadoresPesquisados] = useState([])

  return (
  <div className=' '>
    <input className=' w-96 block m-auto border border-white bg-white rounded-full  p-5  text-black' type="text"
     onBlur={evento =>{
        const textoDigitado = evento.target.value
        const resultado = jogadores.filter(jogador => jogador.nome.includes(textoDigitado))
        setJogadoresPesquisados(resultado)
     }} />
     { jogadoresPesquisados.map( jogador => (
        <div  className='p-14 w-screen flex justify-center items-center mb-5 cursor-pointer hover:border hover:border-white'>
             <p className='p-12 w-48 text-white font-bold' >{jogador.nome}</p>
            <img className='w-48' src={jogador.src} />
        </div>
     ))} 
  </div>
  )
}

export default Input