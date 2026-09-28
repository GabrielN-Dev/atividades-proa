import './App.css'
import  trabalho from '../src/assets/teste.jpeg'
import  traba from '../src/assets/layout3.png'

function App() {

  return (
    <main>
     <h1>Testando uma aplicação no React</h1>
     <img src={trabalho} alt="" />
      <img src={traba} alt="" />
       <div className='caixa'></div>

    </main>
  )
}

export default App
