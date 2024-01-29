"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
	const downloadCv = () => {
		console.log("download cv");
		descargarPDFLocal("files/cv.pdf", "JoseCortezCV.pdf");
	};
	function descargarPDFLocal(dir, nombreArchivo) {
		// Construir la ruta del archivo en la misma ubicación del componente
		const rutaArchivo = `${dir}`;

		// Realizar una solicitud HTTP para obtener el archivo (puedes usar Fetch o Axios)
		fetch(rutaArchivo)
			.then((response) => response.blob())
			.then((blob) => {
				// Crear un enlace temporal para la descarga
				const enlaceDescarga = document.createElement("a");
				enlaceDescarga.href = window.URL.createObjectURL(blob);
				enlaceDescarga.download = nombreArchivo;

				// Agregar el enlace al DOM y simular un clic para iniciar la descarga
				document.body.appendChild(enlaceDescarga);
				enlaceDescarga.click();

				// Limpiar después de la descarga
				document.body.removeChild(enlaceDescarga);
			})
			.catch((error) => {
				console.error("Error al descargar el archivo:", error);
			});
	}

	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hola, Yo soy
						</span>
						<br></br>
						<TypeAnimation
							sequence={["Eduardo", 1000, "Web Developer", 1000]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Desarrollador web con más de 3 años de experiencia en el desarrollo
						de aplicaciones web responsivas.
					</p>

					<div>
						<Link
							href="/#contact"
							className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
							Contactame
						</Link>
						<div
							onClick={downloadCv}
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 cursor-pointer">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Descarga CV
							</span>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#909b92] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src="/images/profile_.jpg"
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
