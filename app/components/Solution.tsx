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
		title: "Accurate Freight Dimensions, Effortless",
		solutions: [
			{
				icon: ZapIcon,
				title: "AI-Powered Freight Dimensioning",
				description:
					"Our AI enables automatic and precise freight dimensioning using your existing surveillance cameras. Eliminate billing errors and maximize your truck utilization.",
			},
			{
				icon: ShieldCheck,
				title: "GDPR-Compliant",
				description:
					"GDPR-compliant by design – your data stays secure and confidential. Your data is processed securely and confidentially.",
			},
			{
				icon: Code2,
				title: "No Hardware Investments",
				description: "No new hardware required: Our AI works with your existing surveillance camera infrastructure. Easy integration, smart software, instant results."
			}
		],
	},
	de: {
		title: "Korrekte Fachtmaße wie aus Zauberhand",
		solutions: [
			{
				icon: ZapIcon,
				title: "KI-gestützte Frachtvermessung",
				description:
					"Unsere KI ermöglicht eine automatische und präzise Frachtvermessung mit Ihren bestehenden Überwachungskameras. So vermeiden Sie Abrechnungsfehler und steigern gleichzeitig die Auslastung Ihrer LKW.",
			},
			{
				icon: ShieldCheck,
				title: "DSGVO-konform",
				description:
					"Datenschutzkonform nach DSGVO – für höchste Sicherheit und Privatsphäre. Ihre Daten werden sicher und vertraulich verarbeitet.",
			},
			{
				icon: Code2,
				title: "Keine Hardware-Investitionen",
				description: "Keine neue Hardware erforderlich: Unsere KI nutzt Ihre bestehende Überwachungskamera-Infrastruktur. Einfach integrieren, intelligent nutzen, sofort Ergebnisse erhalten."
			  }			  
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

