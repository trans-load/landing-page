"use client";

import { motion } from "framer-motion";
import { TrendingDown, Truck, HardDrive, AlertCircle } from "lucide-react";

type Language = "en" | "de";
type IconType = React.ComponentType<{ className?: string }>;

const content: Record<
	Language,
	{
		title: string;
		problems: Array<{
			icon: IconType;
			title: string;
			description: string;
		}>;
	}
> = {
	en: {
		title: "How Incorrect Freight Dimensions Cost You Money",
		problems: [
			{
				icon: TrendingDown,
				title: "Incorrect billing leads to revenue loss",
				description:
					"Up to 5% revenue loss due to incorrect billing caused by inaccurate freight dimensions. Every wrong measurement costs money.",
			},
			{
				icon: Truck,
				title: "Inefficient Truck Utilization",
				description:
					"Without accurate dimensions, optimal truck loading and route planning is impossible — driving down truck utilization and driving up costs.",
			},
			{
				icon: HardDrive,
				title: "Expensive Hardware Dependencies",
				description:
					"Traditional dimensioning solutions require expensive hardware installations and complex integration processes.",
			},
		],
	},
	de: {
		title: "Wie falsche Frachtmaße teuer werden",
		problems: [
			{
				icon: TrendingDown,
				title: "Falsche Abrechnung führt zu Umsatzverlusten",
				description:
					"Bis zu 5% Umsatzverlust durch falsche Abrechnung aufgrund ungenauer Frachtabmessungen. Jede falsche Vermessung kostet Geld.",
			},
			{
				icon: Truck,
				title: "Ineffiziente LKW-Auslastung",
				description:
					"Ohne präzise Frachtmaße ist eine optimale Ladeplanung nicht möglich. Die Folge: geringe LKW-Auslastung und unnötig hohe Kosten.",
			},
			{
				icon: HardDrive,
				title: "Vermessungshardware ist teuer",
				description:
					"Herkömmliche Vermessungslösungen erfordern teure Hardware-Installationen und komplexe Integrationsprozesse.",
			},
		],
	},
};

export default function Problem({ language }: { language: Language }) {
	const { title, problems } = content[language];

	return (
		<section className="py-16 lg:py-20 relative overflow-hidden bg-black">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>
			
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-red-400/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
							<AlertCircle className="w-6 h-6" />
						</div>
						<h2 className="text-4xl font-bold text-white mb-4">
							{title}
						</h2>
					</div>

					{/* Problems Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{problems.map((problem, index) => {
							const Icon = problem.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.15 }}
									className="group"
								>
									<div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col shadow-lg shadow-black/30 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-red-500/10 before:to-transparent before:opacity-50 before:pointer-events-none hover:border-red-500/30 transition-all duration-300">
										<div className="relative z-10">
											<div className="inline-flex items-center justify-center mb-6 w-14 h-14 rounded-full backdrop-blur-sm bg-red-500/20 border border-red-500/30 group-hover:bg-red-500/30 transition-colors">
												<Icon className="w-7 h-7 text-red-400" />
											</div>
											<h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-100 transition-colors">
												{problem.title}
											</h3>
											<p className="text-gray-300 text-base leading-relaxed">
												{problem.description}
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

