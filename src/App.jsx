import "./App.scss"
import Home from "./routes/home/home"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
