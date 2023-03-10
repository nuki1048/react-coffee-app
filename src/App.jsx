import "./App.scss";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Root from "./components/navbar/Navbar";
import OurCoffee from "./pages/ourCoffee/OurCoffee";
import Pleasure from "./pages/pleasure/Pleasure";
import OurCoffeeDetails from "./pages/ourCoffeeDetails/OurCoffeeDetails";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root color={"white"} beforeColor={"white"} />}>
				<Route index element={<Home />} />
				<Route path="ourCoffee" element={<OurCoffee />} />
				<Route path="ourCoffee/:productId" element={<OurCoffeeDetails />} />
				<Route path="pleasure" element={<Pleasure />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
// TODO Потрібно яктось вставити з роутером також footer, щоб його не імпортувати в кожну сторінку
