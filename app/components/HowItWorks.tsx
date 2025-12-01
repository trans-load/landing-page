"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
	Camera,
	Image as ImageIcon,
	Brain,
	Box,
	ChevronRight,
	CheckCircle,
} from "lucide-react";

const content = {
	en: {
		title: "How it works",
		steps: [
			{
				title: "Surveillance Cameras",
				subtitle: "Capture images",
				icon: Camera,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "Pallet Image",
				subtitle: "High-res imagery",
				icon: ImageIcon,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "transload AI",
				subtitle: "Spatial AI processing",
				icon: Brain,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "3D Model",
				subtitle: "Accurate 3D reconstruction",
				icon: Box,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "Measurement Data",
				subtitle: "Correct and reliable",
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
				subtitle: "Bilder erfassen",
				icon: Camera,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "Palettenbild",
				subtitle: "Hochauflösende Bilder",
				icon: ImageIcon,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "transload KI",
				subtitle: "Räumliche KI-Verarbeitung",
				icon: Brain,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "3D-Modell",
				subtitle: "Exakte 3D-Rekonstruktion",
				icon: Box,
				color: "from-orange-400 to-orange-600",
			},
			{
				title: "Messdaten",
				subtitle: "Korrekt und zuverlässig",
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
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { once: true, margin: "-120px" });
	const [activeStep, setActiveStep] = useState<number>(0);
	const [completed, setCompleted] = useState<number[]>([]);

	useEffect(() => {
		if (!inView) return;
		const interval = setInterval(() => {
			setActiveStep((prev) => {
				setCompleted((c) => (c.includes(prev) ? c : [...c, prev]));
				return (prev + 1) % steps.length;
			});
		}, 2000);
		return () => clearInterval(interval);
	}, [inView, steps.length]);

	return (
		<section className="py-20 bg-gray-900 overflow-hidden" ref={ref}>
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
					<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
						{steps.map((s, i) => {
							const Icon = s.icon as any;
							const isActive = i === activeStep;
							const done = completed.includes(i);
							return (
								<React.Fragment key={i}>
									<motion.div
										initial={{ opacity: 0, y: 12 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.35, delay: i * 0.06 }}
										className="flex-1 flex flex-col items-center text-center"
									>
										<motion.div
											animate={
												isActive ? { scale: [1, 1.12, 1] } : { scale: 1 }
											}
											transition={{ duration: 0.7 }}
											className={`w-16 h-16 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center shadow-lg`}
										>
											<Icon className="w-7 h-7 text-white" />
										</motion.div>
										<p className="text-lg font-semibold mt-4 text-white">
											{s.title}
										</p>
										<p className="text-sm text-gray-300 mt-2">{s.subtitle}</p>
									</motion.div>
									{i < steps.length - 1 && (
										<div className="hidden lg:flex items-center justify-center w-12">
											<motion.div
												initial={{ opacity: done ? 1 : 0.35, x: -4 }}
												animate={
													isActive || done
														? { opacity: 1, x: 0 }
														: { opacity: 0.35, x: -4 }
												}
												transition={{ duration: 0.35 }}
												className="text-orange-400"
											>
												<ChevronRight className="w-6 h-6" />
											</motion.div>
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
