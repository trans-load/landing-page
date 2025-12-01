"use client";
import { motion } from "framer-motion";
import { FileText, Truck, BarChart2, ShieldCheck } from "lucide-react";

type Language = "en" | "de";

const content: Record<Language, { title: string; benefitList: string[] }> = {
	en: { 
		title: "Your Benefit",
		benefitList:[
			"Accurate invoicing with customers and partners",
			"Optimized dispatching and truck loading through precise data",
			"Reduced operational costs with automated measurement processes",
			"GDPR-compliant by design, ensuring data privacy and secure processing",
		]
	},
	de: {
		title: "Ihr Vorteil",
		benefitList:[
			"Fundierte Abrechnung mit Kunden und Partnern",
			"Optimierte Disposition durch exakte Daten",
			"Optimierte Ladeplanung und reduzierte Betriebskosten durch automatisierte Vermessung",
			"Datenschutzkonform nach DSGVO – für höchste Sicherheit und Privatsphäre",
		]
	}
};

export default function Benefits({ language }: { language: "en" | "de" }) {
	const { title, benefitList } = content[language];
	const icons = [FileText, Truck, BarChart2, ShieldCheck];
	return (
		<section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-16 text-orange-500 text-center">
						{title}
					</h2>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{benefitList.map((benefit, index) => {
							const tiltOptions = [
								"-rotate-6",
								"rotate-6",
								"-rotate-3",
								"rotate-3",
								"-rotate-1",
								"rotate-1",
							];
							// Keep tilt and hover scale variety only
							const shadowOptions = ["shadow-lg"];
							const hoverScaleOptions = [
								"hover:scale-[1.02]",
								"hover:scale-[1.03]",
								"hover:scale-[1.04]",
							];
							const bgOpacityClass = "bg-white/6";
							const iconColorClass = "text-orange-400";

							const tiltClass = tiltOptions[index % tiltOptions.length];
							const skewClass = ""; // Removed skew options
							const shadowClass = shadowOptions[index % shadowOptions.length];
							const hoverScaleClass =
								hoverScaleOptions[index % hoverScaleOptions.length];
							// bgOpacityClass and iconColorClass are now fixed values
							// pick a small decorative blob type (0 = none, 1 = top-right, 2 = bottom-left)
							const blobType = index % 3;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30, scale: 0.95 }}
									whileInView={{ opacity: 1, y: 0, scale: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.6,
										delay: index * 0.1,
										type: "spring",
										stiffness: 100,
									}}
									className="group relative"
								>
									{/* Glass card with liquid effect */}
									<div
										className={`relative backdrop-blur-sm ${bgOpacityClass} border border-white/10 rounded-2xl p-6 h-full
														${shadowClass} shadow-black/10 transform lg:${tiltClass} transition-all duration-400
														hover:shadow-2xl ${hoverScaleClass} hover:-translate-y-1`}
									>
										{/* Inner content */}
										<div className="relative z-10 flex items-start gap-4">
											{/* Icon with glass effect */}
											<div className="flex-shrink-0">
												<div className="w-12 h-12 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow transition-all duration-300">
													{(() => {
														const Icon = icons[index] || FileText;
														return (
															<Icon
																className={`w-6 h-6 ${iconColorClass} transition-colors duration-300`}
															/>
														);
													})()}
												</div>
											</div>

											{/* Text content */}
											<div className="flex-1">
												<p className="text-white/90 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
													{benefit}
												</p>
											</div>
										</div>

										{/* No colored glow overlays (clean glass look) */}
										{/* Optional small decorative blob */}
										{blobType === 1 && (
											<div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/5 blur-2xl opacity-50 pointer-events-none"></div>
										)}
										{blobType === 2 && (
											<div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-white/6 blur-sm opacity-40 pointer-events-none"></div>
										)}
									</div>

									{/* Floating particles removed to keep glassy design clean */}
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
