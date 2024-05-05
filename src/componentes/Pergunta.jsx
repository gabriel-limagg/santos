import React from 'react'
import santos from "../imagens/santos2.png"

function Pergunta() {
  return (
    <div>
        <h1 className=' p-6 flex justify-center text-white font-bold text-3xl'>QUAL JOGADOR DO SANTOS É SEU FAVORITO?</h1>
        <img src={santos} className='block m-auto w-56 pb-12' alt="" />
    </div>

  )
}

export default Pergunta