import "./App.scss"
import Header from "./components/header"
import Build from "./routes/build/build"
import Home from "./routes/home/home"
import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route index element={<Build />} />
				<Route path="/build" element={<Build />} />
			</Routes>
		</div>
	)
}

export default App
