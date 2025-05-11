import { useState } from 'react'
import './App.css'

import ButtonAppBar from './components/ButtonAppBar'
import CheckboxList from './components/CheckBoxList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <CheckboxList></CheckboxList>
    </>
  )
}

export default App
