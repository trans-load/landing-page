"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	Camera,
	Image as ImageIcon,
	Brain,
	Box,
	ChevronRight,
	CheckCircle,
	ChevronDown,
} from "lucide-react";

const content = {
	en: {
		title: "How it works",
		steps: [
			{
				title: "Surveillance Cameras",
				icon: Camera,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "Pallet Image",
				icon: ImageIcon,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "transload AI",
				icon: Brain,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "3D Model",
				icon: Box,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "Measurement Data",
				icon: CheckCircle,
				color: "from-orange-400 to-orange-600",
			},
		],
	},
	de: {
		title: "So funktioniert's",
		steps: [
			{
				title: "Überwachungskameras",
				icon: Camera,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "Palettenbild",
				icon: ImageIcon,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "transload KI",
				icon: Brain,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "3D-Modell",
				icon: Box,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "Messdaten",
				icon: CheckCircle,
				color: "from-orange-400 to-orange-600",
			},
		],
	},
};

export default function HowItWorksClean({
	language,
}: {
	language: "en" | "de";
}) {
	const { title, steps } = content[language];

	return (
		<section className="py-20 bg-gray-900 overflow-hidden">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-6xl mx-auto"
				>
					<div className="text-center mb-10">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
							<Camera className="w-5 h-5" />
							<span className="sr-only">
								{language === "en" ? "Steps" : "Schritte"}
							</span>
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-white">
							{title}
						</h2>
					</div>

					{/* Desktop view - horizontal */}
					<div className="hidden lg:flex items-top justify-between gap-6">
						{steps.map((s, i) => {
							const Icon = s.icon as any;
							return (
								<React.Fragment key={i}>
									<motion.div
										initial={{ opacity: 0, y: 12 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.35, delay: i * 0.06 }}
										className="flex-1 flex flex-col items-center text-center group cursor-pointer"
									>
										<div className="w-12 h-12 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow transition-all duration-300 group-hover:bg-white/12 group-hover:border-orange-400/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-400/20">
											<Icon className="w-6 h-6 text-orange-400 transition-colors duration-300" />
										</div>
										<p className="text-lg font-semibold mt-4 text-white/90 transition-colors duration-300 group-hover:text-white">
											{s.title}
										</p>
									</motion.div>
									{i < steps.length - 1 && (
										<div className="flex items-center justify-center w-12 group cursor-pointer">
											<ChevronRight className="w-6 h-6 text-orange-400" />
										</div>
									)}
								</React.Fragment>
							);
						})}
					</div>

					{/* Mobile view - vertical with icon on left */}
					<div className="flex flex-col lg:hidden gap-4">
						{steps.map((s, i) => {
							const Icon = s.icon as any;
							return (
								<React.Fragment key={i}>
									<motion.div
										initial={{ opacity: 0, x: -12 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.35, delay: i * 0.06 }}
										className="flex items-center gap-4 group cursor-pointer"
									>
										<div className="w-12 h-12 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow transition-all duration-300 group-hover:bg-white/12 group-hover:border-orange-400/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-400/20 flex-shrink-0">
											<Icon className="w-6 h-6 text-orange-400 transition-colors duration-300" />
										</div>
										<p className="text-lg font-semibold text-white/90 transition-colors duration-300 group-hover:text-white">
											{s.title}
										</p>
									</motion.div>
									{i < steps.length - 1 && (
										<div className="flex items-center justify-center py-1 group cursor-pointer">
											<ChevronDown className="w-6 h-6 text-orange-400" />
										</div>
									)}
								</React.Fragment>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
