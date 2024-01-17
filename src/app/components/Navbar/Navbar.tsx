"use client";
import React from "react";
import Button from "../Button/Button";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import Text from "../Title/Title";
const Navbar = () => {
	const [show, setShow] = React.useState(false);
	return (
		<>
			{" "}
			<div className="mobil">
				<Button
					type="icon"
					icon={`${show ? "close" : "menu"}`}
					alt="menu"
					className={`${show ? "hidden-item" : "show-item"} menu`}
					onClick={() => setShow(!show)}
				/>
			</div>
			<nav className={`${show ? "mobil-open" : "mobil-closed"}`}>
				<Link href="/" className={`logo`}>
					<Image
						src="/assets/images/logo.png"
						alt="logo"
						width={40}
						height={40}
					/>
					<Text type="paragraph">JEVC - Portfolio</Text>
				</Link>

				<ul className={``}>
					<li>
						<Link href="#home">Home</Link>
					</li>
					<li>
						<Link href="#experience">News</Link>
					</li>
					<li>
						<Link href="#portfolio">Contact</Link>
					</li>
					<li>
						<Link href="#skills">About</Link>
					</li>
					<li>
						<Link href="#contact">Contact</Link>
					</li>
				</ul>
				<Button className={``} type="icon" icon="download" alt="dld">
					Curriculum
				</Button>
			</nav>
		</>
	);
};

export default Navbar;
