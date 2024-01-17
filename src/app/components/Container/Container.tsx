import React from "react";

type PropsContainer = {
	children: React.ReactNode;
};
const Container = ({ children }: PropsContainer) => {
	return <div>{children}</div>;
};

export default Container;
