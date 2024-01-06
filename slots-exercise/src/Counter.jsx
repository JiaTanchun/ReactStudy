import {useState} from "react"

// function handleFormSubmit(evt){
//     evt.preventDefault();
//     console.log("Submitted The Form")
// }


export default function Counter(){
    const [num,setNum]=useState(5)
    const changeNum=()=>{
        setNum(num+1)
    }

    return(
        <div>
            {/* <form  onSubmit={handleFormSubmit}>
                <button >Submit</button>
            </form> */}
            <p >The count is :{num}</p>

            <button onClick={changeNum}>Increment</button>
        </div>
    )
}