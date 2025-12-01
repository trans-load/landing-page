"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	Camera,
	Image as ImageIcon,
	Brain,
	Box,
	CheckCircle,
	ArrowRight,
} from "lucide-react";

const content = {
	en: {
		title: "How it works",
		steps: [
			{
				icon: Camera,
				label: "Surveillance Cameras",
				color: "from-orange-400 to-orange-600",
			},
			{
				icon: ImageIcon,
				label: "Pallet Image",
				color: "from-orange-400 to-orange-600",
			},
			{
				icon: Brain,
				label: "transload AI",
				color: "from-orange-400 to-orange-600",
			},
			{ icon: Box, label: "3D Model", color: "from-orange-400 to-orange-600" },
			{
				icon: CheckCircle,
				label: "Measurement Data",
				color: "from-orange-400 to-orange-600",
			},
		],
	},
	de: {
		title: "So funktioniert's",
		steps: [
			{
				icon: Camera,
				label: "Überwachungskameras",
				color: "from-orange-400 to-orange-600",
			},
			{
				icon: ImageIcon,
				label: "Palettenbild",
				color: "from-orange-400 to-orange-600",
			},
			{
				icon: Brain,
				label: "transload KI",
				color: "from-orange-400 to-orange-600",
			},
			{ icon: Box, label: "3D-Modell", color: "from-orange-400 to-orange-600" },
			{
				icon: CheckCircle,
				label: "Messdaten",
				color: "from-orange-400 to-orange-600",
			},
		],
	},
};

export default function HowItWorks({ language }: { language: "en" | "de" }) {
	const { title, steps } = content[language];
	const [activeStep, setActiveStep] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveStep((prev) => (prev + 1) % steps.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [steps.length]);

	return (
		<section className="py-20 bg-gray-900 overflow-hidden">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-6xl mx-auto"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-16 text-orange-500 text-center">
						{title}
					</h2>

					{/* Desktop View - Horizontal Flow */}
					<div className="hidden lg:flex items-center justify-between gap-4">
						{steps.map((step, index) => (
							<React.Fragment key={index}>
								{/* Step Card */}
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.15 }}
									className="flex-1 relative"
								>
									<div
										className={`bg-gray-800 rounded-xl p-6 border transition-all duration-500 h-full ${
											index === activeStep
												? "border-orange-500 shadow-lg shadow-orange-500/50 scale-105"
												: index < activeStep
												? "border-gray-600"
												: "border-gray-700"
										}`}
									>
										{/* Icon Container */}
										<motion.div
											className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
											animate={{
												scale: index === activeStep ? 1.1 : 1,
											}}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<step.icon className="w-8 h-8 text-white" />
										</motion.div>{" "}
										{/* Label */}
										<p
											className={`text-center font-medium text-sm transition-colors duration-300 ${
												index === activeStep ? "text-orange-400" : "text-white"
											}`}
										>
											{step.label}
										</p>
									</div>
								</motion.div>{" "}
								{/* Arrow Between Steps */}
								{index < steps.length - 1 && (
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
										className="flex-shrink-0"
									>
										<motion.div
											animate={{
												x: index === activeStep ? [0, 10, 0] : 0,
												opacity: index === activeStep ? 1 : 0.3,
											}}
											transition={{
												x: {
													duration: 1,
													repeat: index === activeStep ? Infinity : 0,
												},
												opacity: {
													duration: 0.3,
												},
											}}
										>
											<ArrowRight
												className={`w-8 h-8 transition-colors duration-300 ${
													index === activeStep
														? "text-orange-500"
														: "text-gray-600"
												}`}
											/>
										</motion.div>
									</motion.div>
								)}
							</React.Fragment>
						))}
					</div>

					{/* Mobile/Tablet View - Vertical Flow */}
					<div className="lg:hidden flex flex-col gap-6">
						{steps.map((step, index) => (
							<React.Fragment key={index}>
								{/* Step Card */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="relative"
								>
									<div
										className={`bg-gray-800 rounded-xl p-6 border transition-all duration-500 ${
											index === activeStep
												? "border-orange-500 shadow-lg shadow-orange-500/50 scale-105"
												: index < activeStep
												? "border-gray-600"
												: "border-gray-700"
										}`}
									>
										<div className="flex items-center gap-4">
											{/* Icon Container */}
											<motion.div
												className={`w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
												animate={{
													scale: index === activeStep ? 1.1 : 1,
												}}
												transition={{ type: "spring", stiffness: 300 }}
											>
												<step.icon className="w-8 h-8 text-white" />
											</motion.div>

											{/* Label */}
											<p
												className={`font-medium transition-colors duration-300 ${
													index === activeStep
														? "text-orange-400"
														: "text-white"
												}`}
											>
												{step.label}
											</p>
										</div>

										{/* Animated Glow - only for active step */}
										{index === activeStep && (
											<motion.div
												className={`absolute inset-0 rounded-xl bg-gradient-to-r ${step.color} blur-xl -z-10`}
												animate={{
													opacity: [0.1, 0.3, 0.1],
												}}
												transition={{
													duration: 1.5,
													repeat: Infinity,
												}}
											/>
										)}
									</div>
								</motion.div>

								{/* Arrow Between Steps */}
								{index < steps.length - 1 && (
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
										className="flex justify-center"
									>
										<motion.div
											animate={{
												y: index === activeStep ? [0, 10, 0] : 0,
												opacity: index === activeStep ? 1 : 0.3,
											}}
											transition={{
												y: {
													duration: 1,
													repeat: index === activeStep ? Infinity : 0,
												},
												opacity: {
													duration: 0.3,
												},
											}}
											className="rotate-90"
										>
											<ArrowRight
												className={`w-8 h-8 transition-colors duration-300 ${
													index === activeStep
														? "text-orange-500"
														: "text-gray-600"
												}`}
											/>
										</motion.div>
									</motion.div>
								)}
							</React.Fragment>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
