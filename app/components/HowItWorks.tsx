"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const content = {
	en: {
		title: "How it works",
		description:
			"Leverage your existing surveillance cameras to capture precise measurements of incoming freight using cutting-edge spatial AI technology.",
	},
	de: {
		title: "So funktioniert's",
		description:
			"Nutzen Sie Ihre bestehenden Überwachungskameras, um alle Packstücke in Ihrem Umschlaglager präzise zu vermessen.",
	},
};

export default function HowItWorks({ language }: { language: "en" | "de" }) {
	const { title, description } = content[language];

	return (
		<section className="py-20 bg-gray-900">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
						{title}
					</h2>
					<div className="flex items-start gap-6 bg-gray-800 p-8 rounded-lg">
						<Camera className="w-12 h-12 text-orange-500 flex-shrink-0 mt-1" />
						<p className="text-lg md:text-xl text-gray-300 leading-relaxed text-left">
							{description}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
