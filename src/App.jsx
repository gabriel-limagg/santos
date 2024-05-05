import React from 'react'
import Input from './componentes/Input'
import Pergunta from './componentes/Pergunta'

function App() {
  return (
    <div className=' w-screen h-screen bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-950'>
    <Pergunta/>
    <Input/>
    </div>
  )
}

export default App