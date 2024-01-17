import Image from "next/image";
import Link from "next/link";
import React from "react";
import Text from "../Title/Title";

type PropsCarousel = {
	options: Array<{
		title: string;
		description: string;
		image: string;
		url: string;
		width?: number;
		height?: number;
	}>;
};
const Carousel = ({ options }: PropsCarousel) => {
	if (options.length === 0) return null;
	return (
		<section>
			{options.map((option, index) => (
				<div key={index}>
					<Text>{option.title}</Text>
					<Text type="paragraph">{option.description}</Text>
					<Image
						src={option.image}
						alt={option.title}
						width={option.width || 200}
						height={option.height || 300}
					/>
					<Link href={option.url}>Ver más</Link>
				</div>
			))}
		</section>
	);
};

export default Carousel;
