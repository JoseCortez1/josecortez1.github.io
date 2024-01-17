import Image from "next/image";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Text from "./components/Title/Title";
import "./page.css";
import Presentation from "./Dashboard/Presentation";
import GalleryWork from "./Dashboard/GalleryWork";
import WorkExperience from "./Dashboard/WorkExperience";
import Skills from "./Dashboard/Skills";

export default function Home() {
	return (
		<main className="main">
			<Navbar />
			<Presentation />
			<GalleryWork />
			<WorkExperience />
			<Skills />
		</main>
	);
}
