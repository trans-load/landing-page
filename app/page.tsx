"use client";
import { useState, useEffect } from "react";
import { SectionProvider } from "./context/SectionContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Team from "./components/Team";
import GetInTouch from "./components/GetInTouch";
import Partners from "./components/Partners";
import LinkedIn from "./components/LinkedIn";
import Footer from "./components/Footer";

export default function Home() {
	const [language, setLanguage] = useState<"de" | "en">("de");

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<SectionProvider>
			<div className="min-h-screen bg-black text-white">
				<Header language={language} setLanguage={setLanguage} />
				<main>
					<Hero language={language} />
					<Problem language={language} />
					<Solution language={language} />
					<Team language={language} />
					<Partners language={language} />
					<LinkedIn language={language} />
					<GetInTouch language={language} />
					<Footer language={language} />
				</main>
			</div>
		</SectionProvider>
	);
}
