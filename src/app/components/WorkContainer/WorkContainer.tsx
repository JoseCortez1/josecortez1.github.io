import React from "react";
import Text from "../Title/Title";
import Link from "next/link";
export type PropsWorkContainer = {
	id: number;
	startDate: string;
	endDate: string;
	jobPosition: string;
	company: string;
	location?: string;
	description?: string;
	link?: string;
	projects?: string;
	image?: string;
};

const WorkContainer = (props: PropsWorkContainer) => {
	return (
		<div className="wec">
			<div className="date">
				<Text>{props.startDate}</Text> -<Text>{props.endDate}</Text>
			</div>
			{props.image && <img src={props.image} alt={props.company} />}
			<div className="info">
				<Text type="subtitle">{props.jobPosition}</Text>

				<Text type="paragraph">
					{props.company},{props.location}{" "}
				</Text>
			</div>
			{props.link && <Link href={props.link}>Ir al sitio</Link>}
		</div>
	);
};

export default WorkContainer;
