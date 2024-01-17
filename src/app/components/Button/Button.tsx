import Image from "next/image";
import React from "react";
import "./Button.css";
type PropsButton = {
	children?: React.ReactNode;
	type?: "primary" | "secondary" | "icon";
	icon?: string;
	alt?: string;
	className?: string;
	onClick?: () => void;
};
const Button = ({
	children,
	type = "primary",
	icon,
	alt,
	className,
	onClick,
}: PropsButton) => {
	return (
		<button
			onClick={onClick}
			className={`btn ${className} ${type} ${icon ? "icon" : ""}`}>
			{children}{" "}
			{icon && (
				<Image
					alt={alt || ""}
					src={`assets/icons/${icon}.svg`}
					width={20}
					height={20}
				/>
			)}
		</button>
	);
};

export default Button;
