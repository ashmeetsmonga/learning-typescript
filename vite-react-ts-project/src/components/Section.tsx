import React, { ReactNode } from "react";

interface SectionProps {
	title?: string;
	children: ReactNode;
}

const Section = ({ children, title = "This is default title" }: SectionProps) => {
	return (
		<div>
			<h2>{title}</h2>
			<div>{children}</div>
		</div>
	);
};

export default Section;
