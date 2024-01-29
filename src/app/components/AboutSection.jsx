"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<div class="grid grid-cols-3 gap-4">
				<div>
					<ul className="list-disc pl-2 ">
						<li>NextJs</li>
						<li>Typescript</li>
						<li>SQL</li>
					</ul>
				</div>

				<div>
					<li>SASS</li>
					<li>Python</li>
					<li>Node.js</li>
					<li>Express</li>
				</div>

				<div>
					<li>PostgreSQL</li>
					<li>JavaScript</li>
					<li>React</li>
				</div>
			</div>
		),
	},
	{
		title: "Herramientas",
		id: "tools",
		content: (
			<ul className="list-disc pl-2">
				<li>Figma</li>
				<li>Postman</li>
				<li>Jira</li>
				<li>Bitbucket</li>
				<li>Gitlab</li>
				<li>Github</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Fullstack Academy of Code</li>
				<li>University of California, Santa Cruz</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>AWS Cloud Practitioner</li>
				<li>Google Professional Cloud Developer</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/about-image.png"
					width={500}
					height={500}
					alt="About"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>
					<p className="text-base lg:text-lg">
						Apasionado del desarrollo web desde el momento en que descubrí la
						fascinante mundo de la programación, mi compromiso con la mejora
						continua se refleja en la constancia con la que perfecciono mis
						habilidades a diario. Mi travesía en el ámbito abarca diversos
						lenguajes y marcos de trabajo, y encuentro verdadero placer en
						abordar proyectos desafiantes, hallando soluciones creativas para
						problemáticas complejas. En constante búsqueda de oportunidades para
						expandir mis conocimientos, mi objetivo es no solo aprender, sino
						también evolucionar constantemente en mi trayectoria como
						desarrollador web.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}>
							{" "}
							Habilidades{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("tools")}
							active={tab === "tools"}>
							{" "}
							Herramientas{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}>
							{" "}
							Educación{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}>
							{" "}
							Certificaciones{" "}
						</TabButton>
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
