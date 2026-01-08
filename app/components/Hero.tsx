"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";

export default function Hero({ language }: { language: "en" | "de" }) {
	const content = {
		en: {
			title: "Freight Measurements with Spatial AI",
			description: "Precise freight measurements for your cross-dock – without additional hardware",
			callToAction: "Book demo",
		},
		de: {
			title: "Frachtvermesssung mit Spatial AI",
			description: "Exakte Frachtvermessung für Ihr Umschlaglager – ganz ohne zusätzliche Hardware",
			callToAction: "Demo buchen",
		},
	};

	const { title, description, callToAction } =
		content[language as keyof typeof content];

	return (
		<section className="relative py-20 lg:py-32 overflow-hidden bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
					{/* Animation */}
					<div className="flex-1 flex items-center justify-center">
						<div className="relative w-full max-w-xl">
							{/* Video container with border */}
							<div className="relative rounded-2xl overflow-hidden border border-orange-500/30 bg-gray-800/60 backdrop-blur-sm p-2">
								<video
									src="/transload.mov"
									autoPlay
									loop
									muted
									playsInline
									className="w-full h-auto object-contain block rounded-xl"
								/>
							</div>
						</div>
					</div>

					{/* Text Content */}
					<div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
							<span className="text-white">
								{title.split(" ").slice(0, -3).join(" ")}
							</span>
							<br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
								{title.split(" ").slice(-3).join(" ")}
							</span>
						</h1>
						<p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
							{description}
						</p>
						<Button
							size="lg"
							onClick={() => {
								const meetingSection = document.getElementById("meeting");
								if (meetingSection) {
									meetingSection.scrollIntoView({ behavior: "smooth" });
								}
							}}
							className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl focus:outline-none
							 backdrop-blur-md border bg-orange-400/10 border-orange-500/20 text-orange-500 hover:bg-orange-400/20 hover:border-orange-500"
						>
							<span className="drop-shadow-md">{callToAction}</span>
							<ArrowDown className="w-6 h-6 animate-bounce" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
