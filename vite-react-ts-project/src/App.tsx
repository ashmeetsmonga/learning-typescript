import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
	return (
		<div className='App'>
			<Heading title='Heading Title' />
			<Section>This is section children</Section>
		</div>
	);
}

export default App;
