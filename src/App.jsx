import { useState } from 'react'
import './App.css'
import View from './components/View'
import Record from './components/Record'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div class="poke">
      <h1>Welcome To React Secession </h1>
      <View/>
      <Routes>
        <Route path='/' element={<Record/>}> </Route>
        <Route path='/add' element={<Add/>}> </Route>
          fname:"swathi"
      </Routes>
      </div>
    </>
  )
}

export default App