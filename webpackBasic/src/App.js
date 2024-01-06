/*类组件 继承React.Component*/
import React from "react"

class App extends React.Component{
    render(){
        return <div>I am a component</div>
    }
}

/*函数组件 */
const App =()=>{
    return <div>I am a component</div>
}

//导出APP
export default App;