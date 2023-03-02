import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
	const [count, setCount] = useState<number>(1);
	return (
		<div className='App'>
			<Heading title='Heading Title' />
			<Section>This is section children</Section>
			<Counter setCount={setCount}>The count is {count}</Counter>
			<List
				items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
				render={(item: string) => <span className='bold'>{item}</span>}
			/>
		</div>
	);
}

export default App;
