import "./App.scss";
import About from "./components/About/About";
import Best from "./components/Best/Best";
import Promo from "./components/Promo/Promo";

function App() {
	return (
		<div className="App">
			<Promo />
			<About />
			<Best />
		</div>
	);
}

export default App;
