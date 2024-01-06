
import './App.css'
import Chicken from "./Chicken"
import Greeter from "./Greeter"
import DoubleDice from "./DoubleDice"
import Heading from"./Heading"
import ColorList from "./ColorList"


function App() {
  return (
    <div>
      <ColorList colors={["red","pink","teal"]}/>
      <Heading text="cxf" color="magenta"/>
      <Greeter name="CXF" from="xinchang"/>
      <Chicken values={[1,2,3,4]}/>
      <Chicken values={[1,2,3,"a"]}/>
      <Chicken/>
      <DoubleDice/>
    </div>
  )
}

export default App
