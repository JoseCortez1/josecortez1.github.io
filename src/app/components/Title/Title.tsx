import React, { CSSProperties } from "react";

type PropsTitle = {
	children: React.ReactNode;
	type?: "title" | "subtitle" | "paragraph";
	style?: CSSProperties;
};
const Text = ({ children, type = "title", style }: PropsTitle) => {
	return (
		<div className={`${type}`} style={style}>
			{children}
		</div>
	);
};

export default Text;
