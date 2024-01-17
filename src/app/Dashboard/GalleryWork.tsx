import React from "react";
import Container from "../components/Container/Container";
import Text from "../components/Title/Title";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel/Carousel";

const GalleryWork = () => {
	return (
		<Container>
			<div className="info">
				<Text>Mi trabajo</Text>
				<Text type="paragraph">
					Aquí podras encontrar algunos de mis proyectos, los cuales he
					desarrollado
					<Link href={""}>Ver repositorios en Github</Link>
				</Text>
				<Carousel
					options={[
						{
							title: "Proyecto 1",
							description: "Descripción del proyecto",
							image: "/assets/images/projects/centerware.png",
							url: "https://nuxiba.com/centerware-kolob/",
						},
					]}
				/>
			</div>
		</Container>
	);
};

export default GalleryWork;
