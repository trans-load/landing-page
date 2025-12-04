"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Zap,
	CheckCircle2,
	OctagonAlert,
	TrendingDown,
	Truck,
	HardDrive,
	Zap as ZapIcon,
	Gauge,
	Plug,
	ChevronLeft,
	ChevronRight,
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
				problemTitle: "Revenue Loss from Inaccurate Data",
				problemDesc:
					"Freight Forwarders lose up to 5% of revenue because 25% of freight has missing or wrong dimensioning data.",
				solutionIcon: ZapIcon,
				solutionTitle: "Automatic Dimension Detection",
				solutionDesc:
					"The transload AI detects diverging freight dimensioning automatically.",
			},
			{
				problemIcon: Truck,
				problemTitle: "Inefficient Truck Dispatching",
				problemDesc:
					"Efficient truck dispatching becomes impossible due to the lack of clean dimensioning data.",
				solutionIcon: Gauge,
				solutionTitle: "Optimized Loading Efficiency",
				solutionDesc:
					"Clean data enables correct tariffing and highest truck loading efficiency.",
			},
			{
				problemIcon: HardDrive,
				problemTitle: "Costly Hardware Integration",
				problemDesc:
					"New dimensioning hardware is expensive and complex to integrate.",
				solutionIcon: Plug,
				solutionTitle: "Seamless Process Integration",
				solutionDesc:
					"Our solution integrates easily into existing processes – without new hardware.",
			},
		],
	},
	de: {
		pairs: [
			{
				problemIcon: TrendingDown,
				problemTitle: "Umsatzverluste durch ungenaue Daten",
				problemDesc:
					"Speditionen verlieren bis zu 5% ihres Umsatzes, weil 25% der Fracht fehlende oder falsche Abmessungsdaten hat.",
				solutionIcon: ZapIcon,
				solutionTitle: "Automatische Dimensionserkennung",
				solutionDesc:
					"Die transload KI erkennt abweichende Frachtabmessungen automatisch.",
			},
			{
				problemIcon: Truck,
				problemTitle: "Ineffiziente Tourenplanung",
				problemDesc:
					"Effiziente Tourenplanung wird durch mangelnde saubere Vermessungsdaten unmöglich.",
				solutionIcon: Gauge,
				solutionTitle: "Optimierte Ladeeffizienz",
				solutionDesc:
					"Saubere Daten ermöglichen korrekte Tarifierung und höchste Ladeeffizienz.",
			},
			{
				problemIcon: HardDrive,
				problemTitle: "Teure Hardware-Integration",
				problemDesc:
					"Neue Vermessungshardware ist teuer und aufwendig zu integrieren.",
				solutionIcon: Plug,
				solutionTitle: "Nahtlose Prozessintegration",
				solutionDesc:
					"Unsere Lösung lässt sich einfach in bestehende Prozesse integrieren – ganz ohne neue Hardware.",
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
			onClick={() => setIsFlipped(!isFlipped)}
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
					<div className="relative backdrop-blur-sm bg-red-500/5 border border-red-500/20 rounded-2xl p-8 h-full flex flex-col justify-between hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-300">
						<div>
							<div className="inline-flex items-center justify-center mb-4 w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30">
								<pair.problemIcon className="w-5 h-5 text-red-400" />
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								{pair.problemTitle}
							</h3>
						</div>
						<p className="text-gray-100 text-base leading-relaxed">
							{pair.problemDesc}
						</p>
						<div className="mt-4 text-xs text-gray-400">
							{language === "en"
								? "Click to reveal solution"
								: "Klicken um Lösung zu zeigen"}
						</div>
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
					<div className="relative backdrop-blur-sm bg-orange-500/5 border border-orange-500/20 rounded-2xl p-8 h-full flex flex-col justify-between hover:bg-orange-500/10 hover:border-orange-500/40 transition-all duration-300">
						<div>
							<div className="inline-flex items-center justify-center mb-4 w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30">
								<pair.solutionIcon className="w-5 h-5 text-orange-400" />
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								{pair.solutionTitle}
							</h3>
						</div>
						<p className="text-gray-100 text-base leading-relaxed">
							{pair.solutionDesc}
						</p>
						<div className="mt-4 text-xs text-gray-400">
							{language === "en"
								? "Click to reveal problem"
								: "Klicken um Problem zu zeigen"}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default function ProblemSolution({
	language,
	sectionIndex,
	bgColor,
}: {
	language: Language;
	sectionIndex: number;
	bgColor?: string;
}) {
	const { pairs } = content[language];
	const defaultBg = useSectionBg(sectionIndex);
	const finalBg = bgColor || defaultBg;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [[page, direction], setPage] = useState([0, 0]);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
		setCurrentIndex((prev) => {
			const newIndex = prev + newDirection;
			if (newIndex < 0) return pairs.length - 1;
			if (newIndex >= pairs.length) return 0;
			return newIndex;
		});
	};

	const variants = {
		enter: (dir: number) => ({
			x: dir > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (dir: number) => ({
			zIndex: 0,
			x: dir < 0 ? 1000 : -1000,
			opacity: 0,
		}),
	};

	return (
		<section className={`py-20 ${finalBg} relative overflow-hidden`}>
			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
							{language === "en"
								? "Problems & Solutions"
								: "Probleme & Lösungen"}
						</h2>
						<p className="text-gray-300 text-lg">
							{language === "en"
								? "Click each card to reveal the solution"
								: "Klicken Sie auf jede Karte, um die Lösung zu zeigen"}
						</p>
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
						<div className="relative h-96 flex items-center justify-center max-w-2xl mx-auto">
							<motion.div
								key={page}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									x: { type: "spring", stiffness: 300, damping: 30 },
									opacity: { duration: 0.2 },
								}}
								drag="x"
								dragElastic={1}
								dragConstraints={{ left: 0, right: 0 }}
								onDragEnd={(e, { offset, velocity }) => {
									const swipe = Math.abs(offset.x) * velocity.x;
									if (swipe < -10000) {
										paginate(1);
									} else if (swipe > 10000) {
										paginate(-1);
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
								onClick={() => paginate(-1)}
								className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
								aria-label="Previous card"
							>
								<ChevronLeft className="w-6 h-6 text-white" />
							</button>
							<button
								onClick={() => paginate(1)}
								className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
								aria-label="Next card"
							>
								<ChevronRight className="w-6 h-6 text-white" />
							</button>

							{/* Dots Indicator */}
							<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
								{pairs.map((_, index) => (
									<button
										key={index}
										onClick={() => {
											const direction = index > currentIndex ? 1 : -1;
											setPage([page + direction, direction]);
											setCurrentIndex(index);
										}}
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
