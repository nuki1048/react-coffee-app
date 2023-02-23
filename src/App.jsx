import "./App.scss";
import About from "./components/About/About";
import Best from "./components/Best/Best";
import Footer from "./components/Footer/Footer";
import Promo from "./components/Promo/Promo";

function App() {
	return (
		<div className="App">
			<Promo />
			<About />
			<Best />
			<Footer />
		</div>
	);
}

export default App;
