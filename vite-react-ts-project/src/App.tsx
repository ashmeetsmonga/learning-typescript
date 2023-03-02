import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";

function App() {
	const [count, setCount] = useState<number>(1);
	return (
		<div className='App'>
			<Heading title='Heading Title' />
			<Section>This is section children</Section>
			<Counter setCount={setCount}>The count is {count}</Counter>
		</div>
	);
}

export default App;
