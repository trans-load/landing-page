"use client";

import { motion } from "framer-motion";
import { Zap as ZapIcon, Gauge, Code2, CheckCircle2, ShieldCheck } from "lucide-react";

type Language = "en" | "de";
type IconType = React.ComponentType<{ className?: string }>;

const content: Record<
	Language,
	{
		title: string;
		solutions: Array<{
			icon: IconType;
			title: string;
			description: string;
		}>;
	}
> = {
	en: {
		title: "The Solution",
		solutions: [
			{
				icon: ZapIcon,
				title: "AI-Powered Dimension Detection",
				description:
					"Automatic, precise dimension detection using your existing cameras. GDPR-compliant – your data stays secure and confidential. Eliminate billing errors and revenue loss.",
			},
			{
				icon: Gauge,
				title: "Smart Load Optimization",
				description:
					"Real-time accurate dimensions enable perfect truck loading and optimal route planning. Maximize capacity utilization and reduce costs.",
			},
			{
				icon: Code2,
				title: "Software-Only Solution",
				description:
					"No hardware investment required. Works with your existing camera infrastructure. Easy integration, intelligent software, immediate results.",
			},
		],
	},
	de: {
		title: "Die Lösung",
		solutions: [
			{
				icon: ZapIcon,
				title: "KI-gestützte Dimensionserkennung",
				description:
					"Automatische, präzise Dimensionserkennung mit Ihrer vorhandenen Kamerainfrastruktur. DSGVO-konform – Ihre Daten bleiben sicher und vertraulich. Eliminieren Sie Abrechnungsfehler und Umsatzverluste.",
			},
			{
				icon: Gauge,
				title: "Intelligente Auslastungsoptimierung",
				description:
					"Echtzeitdaten ermöglichen perfekte Ladeplanung und optimale Tourenplanung. Maximieren Sie die LKW-Auslastung und reduzieren Sie Kosten.",
			},
			{
				icon: Code2,
				title: "Reine Software-Lösung",
				description:
					"Keine Hardware-Investition nötig. Funktioniert mit Ihrer vorhandenen Kamerainfrastruktur. Einfache Integration, intelligente Software, sofortige Ergebnisse.",
			},
		],
	},
};

export default function Solution({ language }: { language: Language }) {
	const { title, solutions } = content[language];

	return (
		<section className="py-16 lg:py-20 relative overflow-hidden bg-black">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>
			
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
							<CheckCircle2 className="w-6 h-6" />
						</div>
						<h2 className="text-4xl font-bold text-white mb-4">
							{title}
						</h2>
					</div>

					{/* Solutions Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{solutions.map((solution, index) => {
							const Icon = solution.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="group"
								>
									<div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col shadow-lg shadow-black/30 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-green-500/10 before:to-transparent before:opacity-50 before:pointer-events-none hover:border-green-500/30 transition-all duration-300">
										<div className="relative z-10">
											<div className="inline-flex items-center justify-center mb-6 w-14 h-14 rounded-full backdrop-blur-sm bg-green-500/20 border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
												<Icon className="w-7 h-7 text-green-400" />
											</div>
											<h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-100 transition-colors">
												{solution.title}
											</h3>
											<p className="text-gray-300 text-base leading-relaxed">
												{solution.description}
											</p>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

