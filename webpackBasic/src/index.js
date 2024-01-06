import ReactDOM from "react-dom/client"
import "./index.css"

const App=<div className="logs">
    <div className="item">
        <div className="date">
            <div className="month">Jan</div>
            <div className="day">06</div>
        </div>
        <div className="content">
            <h2 className="desc">Studying React</h2>
            <div className="time">40 min</div>
        </div>
    </div>
    <div className="item">
        <div className="date">
            <div className="month">Jan</div>
            <div className="day">07</div>
        </div>
        <div className="content">
        <h2 className="desc">Studying React</h2>
        <div className="time">40 min</div>
        </div>
    </div>


    
</div>

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(App)