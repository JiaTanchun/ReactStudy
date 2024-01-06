export default function ColorList({colors}){
//   const element=[<p>Hello!</p>,<h1>Bye!</h1>]
//    const lis=colors.map((x)=><li>{x}</li>)
    return (
        <div>
            {colors.map((color)=>(
                <li style={{color:color}}>{color}</li>
            ))}
        </div>
    )
}