"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = {
	en: [
		"Accurate invoicing with customers and partners",
		"Optimized dispatching and truck loading through precise data",
		"Reduced operational costs with automated measurement processes",
		"GDPR-compliant by design, ensuring data privacy and secure processing",
	],
	de: [
		"Fundierte Abrechnung mit Kunden und Partnern",
		"Optimierte Disposition durch exakte Daten",
		"Optimierte Ladeplanung und reduzierte Betriebskosten durch automatisierte Vermessung",
		"Datenschutzkonform nach DSGVO – für höchste Sicherheit und Privatsphäre",
	],
};

export default function Benefits({ language }) {
	return (
		<section className="py-20 bg-gray-800">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12 text-orange-500">
					{language === "en" ? "Your benefit" : "Vorteile"}
				</h2>
				<div className="grid grid-cols-1 gap-8">
					{benefits[language].map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="flex items-start bg-gray-700 p-4 rounded-lg"
						>
							<CheckCircle className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" />
							<p className="text-lg text-white">{benefit}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
