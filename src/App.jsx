import "./App.scss"
import Header from "./components/header"
import Home from "./routes/home/home"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
