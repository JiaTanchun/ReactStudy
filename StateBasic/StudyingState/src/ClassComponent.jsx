import React,{Component} from "react"

class ClassComponent extends Component{

    divRef=React.createRef()

    state={
        count:0,
        test:3.2,
        obj:{name:"jtc",age:18}
    }
    clickHandler=()=>{
        this.setState({obj:{...this.state.obj,name:"ldy"}})
        this.setState(prevState=>{
            return {
                count:prevState.count+1
            }
        })
    }
    
    render(){
        
        console.log(this.divRef.current)

        return (
            <div ref={this.divRef}>
            <ul>
                <h1>{this.state.count}---GPA:{this.state.test}</h1>
                <h1>{this.state.obj.name}----{this.state.obj.age}</h1>
                <button onClick={this.clickHandler}>count+1</button>
                <li>姓名：{this.props.Username}</li>
                <li>年龄：{this.props.age}</li>
            </ul>
            </div>
        );
    }
}

export default ClassComponent;