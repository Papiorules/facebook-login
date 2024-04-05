
import { useState } from 'react'
import style from './App.module.css'
import LeftSide from './components/left'
import RightSide from './components/right'
import SignUpModal from './components/SignUp_Modal'

function App() {
  const [signUp, setState] = useState(false)

  return (
    <>
      <div id={style.body}>
        <LeftSide/>
        <RightSide state={signUp} setState={setState}/>
        {signUp && <SignUpModal  state={signUp} setState={setState}/>}
      </div>
      
    </>
  )
}

export default App
