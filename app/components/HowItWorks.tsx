"use client";

import { motion } from "framer-motion";
import { Scan, MapPin, Video, Box, Ruler, Zap, ArrowRight } from "lucide-react";

type Language = "en" | "de";

const content: Record<
	Language,
	{
		title: string;
		subtitle: string;
		badge: string;
		steps: Array<{
			title: string;
			description: string;
		}>;
	}
> = {
	en: {
		title: "How It Works",
		subtitle: "From inbound scan to exact freight dimensions – fully automated.",
		badge: "Product Workflow",
		steps: [
			{
				title: "Inbound Scan",
				description:
					"Warehouse staff scans the pallet at the inbound gate. The scanner logs the exact position and timestamp in your hall.",
			},
			{
				title: "Match to Camera",
				description:
					"Using the scan position, we automatically pick the surveillance camera that captured the pallet and anonymize people in a GDPR-compliant way.",
			},
			{
				title: "Identify Scanned Pallet",
				description:
					"We sync scan position and camera frames to reliably identify the scanned pallet.",
			},
			{
				title: "Build 3D Model",
				description:
					"Our spatial AI system reconstructs a detailed 3D model of the pallet and its load from the anonymized camera images.",
			},
			{
				title: "Extract Dimensions",
				description:
					"We extract exact length, width and height and make them available for your TMS.",
			},
		],
	},
	de: {
		title: "So funktioniert's",
		subtitle: "Vom Eingangsscan zu exakten Frachtmaßen – vollautomatisiert.",
		badge: "Ablauf im Lager",
		steps: [
			{
				title: "Eingangsscan",
				description:
					"Die Palette wird im Eingang vom Lagerpersonal gescannt. Der Scanner speichert die exakte Position in Ihrer Halle.",
			},
			{
				title: "Kamera zuordnen",
				description:
					"Anhand der Scan-Position wählen wir automatisch die Überwachungskamera aus, die die Palette erfasst hat, und anonymisieren Personen DSGVO-konform.",
			},
			{
				title: "Gescannte Palette identifizieren",
				description:
					"Scan-Positionen und Kamerabilder werden kombiniert, um jede Palette eindeutig zu identifizieren.",
			},
			{
				title: "3D-Modell erzeugen",
				description:
					"Unser Spatial AI-Modell erstellt aus den anonymisierten Kamerabildern ein detailliertes 3D-Modell der gescannten Palette und der Ladung.",
			},
			{
				title: "Maße auslesen",
				description:
					"Wir lesen exakte Länge, Breite und Höhe aus und stellen sie für Ihr TMS bereit.",
			},
		],
	},
};

const icons = [Scan, MapPin, Video, Box, Ruler];

export default function HowItWorks({ language }: { language: Language }) {
	const { title, subtitle, badge, steps } = content[language];

	return (
		<section className="py-16 lg:py-20 relative overflow-hidden bg-black">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>

			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-20 pointer-events-none">
				<div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Header – aligned with other sections (icon + title) */}
					<div className="text-center mb-16">
						<div className="inline-flex items-center justify-center px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-400 mb-4">
							<Zap className="w-5 h-5" />
						</div>
						<h2 className="text-4xl font-bold text-white mb-2">
							{title}
						</h2>
					</div>

					{/* Steps – horizontal on desktop, vertical on mobile */}
					{/* Desktop: horizontal flow with arrows between cards */}
					<div className="hidden lg:flex items-stretch justify-center gap-6 max-w-6xl mx-auto">
						{steps.map((step, index) => {
							const Icon = icons[index] ?? Scan;
							const isLast = index === steps.length - 1;

							return (
								<div key={step.title} className="flex items-stretch gap-4">
									<motion.div
										initial={{ opacity: 0, y: 24 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										className="flex-1 min-w-[220px] max-w-[260px]"
									>
										<div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/30 hover:border-orange-500/40 hover:shadow-orange-500/30 transition-all duration-300 group h-full flex flex-col">
											<div className="pointer-events-none absolute -top-4 -right-1 text-6xl font-black text-orange-500/5 group-hover:text-orange-500/10 transition-colors duration-300">
												{index + 1}
											</div>
											<div className="relative z-10 flex flex-col p-6 gap-4 h-full">
												<div className="flex items-center justify-between mb-1">
													<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl backdrop-blur-sm bg-orange-500/20 border border-orange-500/40 group-hover:bg-orange-500/30 transition-colors shadow-md shadow-orange-500/30">
														<Icon className="w-7 h-7 text-orange-200" />
													</div>
												</div>
												<h3 className="text-xl font-semibold text-white group-hover:text-orange-100 transition-colors">
													{step.title}
												</h3>
												<p className="text-base text-gray-300 leading-relaxed">
													{step.description}
												</p>
											</div>
										</div>
									</motion.div>

									{!isLast && (
										<motion.div
											initial={{ opacity: 0, x: -8 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
											className="flex items-center"
										>
											<ArrowRight className="w-5 h-5 text-orange-400" />
										</motion.div>
									)}
								</div>
							);
						})}
					</div>

					{/* Mobile / Tablet: vertical list without numbers, simple flow */}
					<div className="lg:hidden max-w-3xl mx-auto space-y-6">
						{steps.map((step, index) => {
							const Icon = icons[index] ?? Scan;
							const isLast = index === steps.length - 1;

							return (
								<div key={step.title} className="flex flex-col gap-3">
									<motion.div
										initial={{ opacity: 0, y: 24 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/30 hover:border-orange-500/40 hover:shadow-orange-500/30 transition-all duration-300 group"
									>
										<div className="pointer-events-none absolute -top-4 -right-1 text-6xl font-black text-orange-500/5 group-hover:text-orange-500/10 transition-colors duration-300">
											{index + 1}
										</div>
										<div className="relative z-10 flex flex-col p-6 gap-4">
											<div className="flex items-center justify-between mb-1">
												<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl backdrop-blur-sm bg-orange-500/20 border border-orange-500/40 group-hover:bg-orange-500/30 transition-colors shadow-md shadow-orange-500/30">
													<Icon className="w-7 h-7 text-orange-200" />
												</div>
											</div>
											<h3 className="text-xl font-semibold text-white group-hover:text-orange-100 transition-colors">
												{step.title}
											</h3>
											<p className="text-base text-gray-300 leading-relaxed">
												{step.description}
											</p>
										</div>
									</motion.div>

									{!isLast && (
										<motion.div
											initial={{ opacity: 0, y: -8 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
											className="flex items-center justify-center"
										>
											<ArrowRight className="w-5 h-5 text-orange-400 rotate-90" />
										</motion.div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}



