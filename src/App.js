import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Todos />
			<Footer />
		</div>
	);
}

export default App;
