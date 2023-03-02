import React, { ReactNode } from "react";

interface CounterProps {
	children: ReactNode;
	setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ children, setCount }: CounterProps) => {
	return (
		<>
			<h1>{children}</h1>
			<button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
			<button onClick={() => setCount((prev) => prev - 1)}>Increment</button>
		</>
	);
};

export default Counter;
