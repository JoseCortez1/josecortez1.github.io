import React from "react";
import jobs from "../assets/JSON/workExperience.json";
import WorkContainer, {
	PropsWorkContainer,
} from "../components/WorkContainer/WorkContainer";
const WorkExperience = () => {
	return (
		<div>
			{jobs.works.map((job: PropsWorkContainer) => (
				<WorkContainer key={job.id} {...job} />
			))}
		</div>
	);
};

export default WorkExperience;
