import React from "react";
import Container from "../components/Container/Container";
import Text from "../components/Title/Title";
import Image from "next/image";

const Presentation = () => {
	return (
		<Container>
			<div className="info">
				<Text>
					<span className="">Hola,</span>
					Soy Eduardo.
				</Text>
				<Text type="subtitle">Ingeniero de Software</Text>

				<Text type="paragraph">
					Soy un Ingeniero de software el cual disfruta de aprender y crear
					cosas nuevas,, actualmente me enfoco mas en el desarrollo web, pero
					mis intereses me han llevado a utiliar y crear herramientas en otros
					lenguajes de programacion como Python, C#, C, C++, entre otros.
				</Text>
			</div>
			<Image
				width={500}
				height={500}
				src={"/assets/images/profile.jpg"}
				alt="Profile photo"></Image>
		</Container>
	);
};

export default Presentation;
