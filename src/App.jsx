import "./App.scss";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Pleasure from "./pages/Pleasure";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Navbar color={"white"} beforeColor={"white"} />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="pleasure" element={<Pleasure />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
