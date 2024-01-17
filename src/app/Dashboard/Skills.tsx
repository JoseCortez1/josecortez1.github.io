import React from "react";
import Container from "../components/Container/Container";
import Text from "../components/Title/Title";
import { skills } from "../assets/JSON/skills.json";
const Skills = () => {
	return (
		<Container>
			<div className="experience">
				<span>03</span>years of experience
			</div>
			<div className="skills">
				<Text>Mis Habilidades</Text>
				<Text type="paragraph">
					Desde que empece en el mundo del desarrollo he adquirido conocimiento
					en los siguientes ambitos
				</Text>
				{skills.map((skill: any) => (
					<div key={skill.id}>
						<div className="progress__bar" style={{ color: skill.color }}>
							{skill.percentage}
						</div>
						<Text type="paragraph" style={{ color: skill.color }}>
							{skill.name}
						</Text>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Skills;
