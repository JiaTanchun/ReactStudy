// import Slots from "./Slots";
import "./App.css";
import ShoppingList from "./ShoppingList";
import Counter from "./Counter"
import Toggler from "./Toggler"
import ToggleCounter from "./ToggleCounter"
import ColorBox from "./ColorBox"
import ColorBoxGrid from "./ColorBoxGrid"
// function App() {
//   return (
//     <div>
//       <Slots val1="🍌" val2="🍌" val3="🍌" />
//       <Slots val1="cherry" val2="cherry" val3="🍌" />
//     </div>
//   );
// }
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

const data=[
  {id:1,item:"egg",quantity:12,completed:false},
  {id:2,item:"milk",quantity:120,completed:true}
]

function App(){
  return (<div>
    <Counter num={0} />
    <ToggleCounter/>
    <ColorBoxGrid colors={colors}/>

    </div>)
}

export default App;
