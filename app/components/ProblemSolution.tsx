"use client";

import { motion } from "framer-motion";
import { TrendingDown, Zap, CheckCircle2 } from "lucide-react";

type Language = "en" | "de";

const content: Record<
	Language,
	{
		problemTitle: string;
		solutionTitle: string;
		problemDesc: string[];
		solutionDesc: string[];
	}
> = {
	en: {
		problemTitle: "The Problem",
		solutionTitle: "Our Solution",
		problemDesc: [
			"Freight Forwarders lose up to 5% of revenue because 25% of freight has missing or wrong dimensioning data.",
			"Efficient truck dispatching becomes impossible due to the lack of clean dimensioning data.",
		],
		solutionDesc: [
			"The transload AI detects diverging freight dimensioning automatically.",
			"Clean data enables correct tariffing and highest truck loading efficiency.",
		],
	},
	de: {
		problemTitle: "Das Problem",
		solutionTitle: "Unsere Lösung",
		problemDesc: [
			"Speditionen verlieren bis zu 5% ihres Umsatzes, weil 25% der Fracht fehlende oder falsche Abmessungsdaten hat.",
			"Effiziente Tourenplanung wird durch mangelnde saubere Vermessungsdaten unmöglich.",
		],
		solutionDesc: [
			"Die transload KI erkennt abweichende Frachtabmessungen automatisch.",
			"Saubere Daten ermöglichen korrekte Tarifierung und höchste Ladeeffizienz.",
		],
	},
};

export default function ProblemSolution({ language }: { language: Language }) {
	const { problemTitle, solutionTitle, problemDesc, solutionDesc } =
		content[language];

	return (
		<section className="py-20 bg-gray-900 relative overflow-hidden">
			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Problem Section */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						{/* Problem Header */}
						<div className="mb-8">
							<div className="inline-flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
									<TrendingDown className="w-5 h-5 text-red-400" />
								</div>
								<h2 className="text-3xl md:text-4xl font-bold text-white">
									{problemTitle}
								</h2>
							</div>
							<div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
						</div>

						{/* Problem Content */}
						<div className="space-y-6">
							{problemDesc.map((desc, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									className="group relative"
								>
									{/* Card with glass effect */}
									<div className="relative backdrop-blur-sm bg-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-300">
										{/* Impact number */}
										<div className="inline-block mb-3 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30">
											<span className="text-red-300 text-sm font-semibold">
												{index === 0 ? "Up to -5%" : "25% affected"}
											</span>
										</div>

										{/* Text */}
										<p className="text-gray-100 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
											{desc}
										</p>

										{/* Subtle background glow on hover */}
										<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 transition-all duration-300 pointer-events-none"></div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Solution Section */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						{/* Solution Header */}
						<div className="mb-8">
							<div className="inline-flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
									<Zap className="w-5 h-5 text-orange-400" />
								</div>
								<h2 className="text-3xl md:text-4xl font-bold text-white">
									{solutionTitle}
								</h2>
							</div>
							<div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
						</div>

						{/* Solution Content */}
						<div className="space-y-6">
							{solutionDesc.map((desc, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									className="group relative"
								>
									{/* Card with glass effect */}
									<div className="relative backdrop-blur-sm bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 hover:bg-orange-500/10 hover:border-orange-500/40 transition-all duration-300">
										{/* Checkmark */}
										<div className="inline-flex items-center justify-center mb-3 w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30">
											<CheckCircle2 className="w-4 h-4 text-orange-400" />
										</div>

										{/* Text */}
										<p className="text-gray-100 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
											{desc}
										</p>

										{/* Subtle background glow on hover */}
										<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300 pointer-events-none"></div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
