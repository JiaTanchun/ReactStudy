import { useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//使用setState修改一个state时，并不表示修改当前state，而是修改的是组件下一次渲染
//setState会触发组件的重新渲染

function App() {
  const [count, setCount] = useState(0)
  const [counter,setCounter]=useState(1)
  const [user,setUser]=useState({name:"cxf",age:18})
  const userHandler=()=>{
    user.age=25
    setUser({name:"lby"})
    console.log(user)

    const newUser=Object.assign({},user)
    console.log(newUser)
    console.log(newUser===user)
    newUser.name="jiatanchun"
    setUser(newUser)

    setUser({...user,age:30})
    console.log(user)
  }

  const counterHandler=()=>{
    setCounter(counter+1)
    setCounter(counter+1)
  }
  const h2Ref=useRef()
  const buttonRef=useRef()
  const clickHandler=()=>{
    const header=document.getElementById("header")
    console.log(h2Ref.current===header)
    console.log(h2Ref)
    console.log(h2Ref.current)
    console.log(header)

    console.log(buttonRef.current)
  }

  return (
    <>
      
    
      <div className="card">
        <button onClick={counterHandler} ref={buttonRef}>{counter}</button>
        <h2 id="header" ref={h2Ref} onClick={clickHandler}>I am Header</h2>

        <h1>{user.name}--{user.age}</h1>
        <button onClick={userHandler}>changeUser</button>
        /* 
        *setState()中回调函数的返回值会变成新的state值
        *回调函数执行时,React会将最新的status值作为参数传递
  
        **/
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
