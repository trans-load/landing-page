"use client";
import { useState, useEffect } from "react";
import { SectionProvider } from "./context/SectionContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Team from "./components/Team";
import GetInTouch from "./components/GetInTouch";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
	const [language, setLanguage] = useState<"de" | "en">("de");

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<SectionProvider>
			<div className="min-h-screen bg-gray-900 text-white">
				<Header language={language} setLanguage={setLanguage} />
				<main>
					<Hero language={language} sectionIndex={0} />
					<ProblemSolution language={language} sectionIndex={1} />
					<Benefits language={language} sectionIndex={3} />
					<Team language={language} sectionIndex={4} />
					<GetInTouch sectionIndex={5} />
					<Partners sectionIndex={6} />
					<Footer language={language} />
				</main>
			</div>
		</SectionProvider>
	);
}
