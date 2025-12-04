"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	TrendingDown,
	Truck,
	HardDrive,
	Zap as ZapIcon,
	Gauge,
	Code2,
	ChevronLeft,
	ChevronRight,
	Target,
} from "lucide-react";
import { useSectionBg } from "../context/SectionContext";

type Language = "en" | "de";
type IconType = React.ComponentType<{ className?: string }>;

const content: Record<
	Language,
	{
		pairs: Array<{
			problemIcon: IconType;
			problemTitle: string;
			problemDesc: string;
			solutionIcon: IconType;
			solutionTitle: string;
			solutionDesc: string;
		}>;
	}
> = {
	en: {
		pairs: [
			{
				problemIcon: TrendingDown,
				problemTitle: "Lost Revenue from Poor Data Quality",
				problemDesc:
					"Freight Forwarders lose up to 5% of revenue because they incorrectly bill customers and partners due to wrong dimensioning data.",
				solutionIcon: ZapIcon,
				solutionTitle: "AI-Powered Dimension Detection",
				solutionDesc:
					"Our cutting-edge spatial AI uses your existing surveillance cameras to detect freight dimensions automatically and accurately.",
			},
			{
				problemIcon: Truck,
				problemTitle: "Inefficient Route & Load Planning",
				problemDesc:
					"Efficient truck dispatching becomes impossible due to the lack of clean dimensioning data.",
				solutionIcon: Gauge,
				solutionTitle: "Smart Load Optimization",
				solutionDesc:
					"Clean data from your existing camera infrastructure enables correct tariffing and highest truck loading efficiency.",
			},
			{
				problemIcon: HardDrive,
				problemTitle: "Expensive Hardware Dependencies",
				problemDesc:
					"New dimensioning hardware is expensive and complex to integrate.",
				solutionIcon: Code2,
				solutionTitle: "Software-Only Solution",
				solutionDesc:
					"Leverage your existing surveillance cameras with spatial AI – no new hardware needed, just intelligent software.",
			},
		],
	},
	de: {
		pairs: [
			{
				problemIcon: TrendingDown,
				problemTitle: "Umsatzverluste durch schlechte Datenqualität",
				problemDesc:
					"Speditionen verlieren bis zu 5% ihres Umsatzes, weil sie durch falsche Abmessungsdaten falsch mit Kunden und Partnern abrechnen.",
				solutionIcon: ZapIcon,
				solutionTitle: "KI-gestützte Dimensionserkennung",
				solutionDesc:
					"Unsere fortschrittliche räumliche KI nutzt Ihre vorhandenen Überwachungskameras, um Frachtabmessungen automatisch und präzise zu erkennen.",
			},
			{
				problemIcon: Truck,
				problemTitle: "Ineffiziente Planung & Auslastung",
				problemDesc:
					"Effiziente Tourenplanung wird durch mangelnde saubere Vermessungsdaten unmöglich.",
				solutionIcon: Gauge,
				solutionTitle: "Intelligente Auslastungsoptimierung",
				solutionDesc:
					"Saubere Daten aus Ihrer vorhandenen Kamerainfrastruktur ermöglichen korrekte Tarifierung und höchste Ladeeffizienz.",
			},
			{
				problemIcon: HardDrive,
				problemTitle: "Teure Hardware-Abhängigkeiten",
				problemDesc:
					"Neue Vermessungshardware ist teuer und aufwendig zu integrieren.",
				solutionIcon: Code2,
				solutionTitle: "Reine Software-Lösung",
				solutionDesc:
					"Nutzen Sie Ihre vorhandenen Überwachungskameras mit räumlicher KI – keine neue Hardware erforderlich, nur intelligente Software.",
			},
		],
	},
};

function FlipCard({
	pair,
	index,
	language,
}: {
	pair: (typeof content.en.pairs)[0];
	index: number;
	language: Language;
}) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
			onMouseEnter={() => setIsFlipped(true)}
			onMouseLeave={() => setIsFlipped(false)}
			className="h-full cursor-pointer"
		>
			<div
				className="relative w-full h-full"
				style={{
					transformStyle: "preserve-3d",
					transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
					transition: "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
				}}
			>
				{/* Front Side - Problem */}
				<div
					className="absolute w-full h-full"
					style={{
						backfaceVisibility: "hidden",
					}}
				>
					<div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg shadow-black/30 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-red-500/10 before:to-transparent before:opacity-50 before:pointer-events-none">
						<div className="relative z-10">
							<div className="inline-flex items-center justify-center mb-4 w-8 h-8 rounded-full backdrop-blur-sm bg-red-500/20 border border-red-500/30">
								<pair.problemIcon className="w-5 h-5 text-red-400" />
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								{pair.problemTitle}
							</h3>
						</div>
						<p className="text-gray-100 text-base leading-relaxed relative z-10">
							{pair.problemDesc}
						</p>
					</div>
				</div>

				{/* Back Side - Solution */}
				<div
					className="absolute w-full h-full"
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					<div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg shadow-black/30 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-green-500/10 before:to-transparent before:opacity-50 before:pointer-events-none">
						<div className="relative z-10">
							<div className="inline-flex items-center justify-center mb-4 w-8 h-8 rounded-full backdrop-blur-sm bg-green-500/20 border border-green-500/30">
								<pair.solutionIcon className="w-5 h-5 text-green-400" />
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								{pair.solutionTitle}
							</h3>
						</div>
						<p className="text-gray-100 text-base leading-relaxed relative z-10">
							{pair.solutionDesc}
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default function ProblemSolution({ language }: { language: Language }) {
	const { pairs } = content[language];
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSwipe = (direction: number) => {
		setCurrentIndex((prev) => {
			const next = prev + direction;
			if (next < 0) return pairs.length - 1;
			if (next >= pairs.length) return 0;
			return next;
		});
	};

	return (
		<section className={`py-16 lg:py-20 relative overflow-hidden bg-black`}>
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
							<Target className="w-5 h-5" />
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-white">
							{language === "en"
								? "Better dimensions, better margins"
								: "Bessere Abmessungen, bessere Marge"}
						</h2>
					</motion.div>

					{/* Cards Grid - Desktop */}
					<div className="hidden lg:grid grid-cols-3 gap-8">
						{pairs.map((pair, index) => (
							<div key={index} className="h-80">
								<FlipCard pair={pair} index={index} language={language} />
							</div>
						))}
					</div>

					{/* Mobile Carousel */}
					<div className="lg:hidden">
						<div className="relative h-96 flex items-center justify-center max-w-2xl mx-auto overflow-hidden">
							<motion.div
								key={currentIndex}
								initial={{ x: 300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -300, opacity: 0 }}
								transition={{ type: "spring", stiffness: 300, damping: 30 }}
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0.2}
								onDragEnd={(_, { offset, velocity }) => {
									const swipe = offset.x * velocity.x;
									if (swipe < -500 || offset.x < -50) {
										handleSwipe(1);
									} else if (swipe > 500 || offset.x > 50) {
										handleSwipe(-1);
									}
								}}
								className="absolute w-full px-4 flex justify-center"
							>
								<div className="h-80 w-full max-w-sm">
									<FlipCard
										pair={pairs[currentIndex]}
										index={currentIndex}
										language={language}
									/>
								</div>
							</motion.div>

							{/* Navigation Buttons */}
							<button
								onClick={() => handleSwipe(-1)}
								className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
								aria-label="Previous card"
							>
								<ChevronLeft className="w-6 h-6 text-white" />
							</button>
							<button
								onClick={() => handleSwipe(1)}
								className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
								aria-label="Next card"
							>
								<ChevronRight className="w-6 h-6 text-white" />
							</button>

							{/* Dots Indicator */}
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
								{pairs.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentIndex(index)}
										className={`w-2 h-2 rounded-full transition-all ${
											index === currentIndex
												? "bg-white w-6"
												: "bg-white/40 hover:bg-white/60"
										}`}
										aria-label={`Go to card ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
