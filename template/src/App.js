import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import "./app.css";

import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/404/NotFound";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";



function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="about" element={<About />} />
					<Route exact path="contact" element={<Contact />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
