import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import "./App.css";
import { BoxWrapper } from "./components/Todos.style";

function App() {
	return (
		<div className="App">
			<h1>TODO</h1>
			<BoxWrapper>
				<Header />
				<Todos />
			</BoxWrapper>
			<Footer />
		</div>
	);
}

export default App;
