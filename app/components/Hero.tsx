"use client";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";

export default function Hero({ language }: { language: "en" | "de" }) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		// Ensure video is muted for autoplay on mobile
		video.muted = true;
		video.playbackRate = 0.7; // Slow down to 70% speed

		// Try to play when video can start playing
		const attemptPlay = () => {
			video.play().catch((error) => {
				// Silently handle autoplay prevention
				console.log("Video autoplay prevented:", error);
			});
		};

		// Try immediately
		attemptPlay();

		// Also try when video is ready
		video.addEventListener("canplay", attemptPlay, { once: true });
		video.addEventListener("loadeddata", attemptPlay, { once: true });

		return () => {
			video.removeEventListener("canplay", attemptPlay);
			video.removeEventListener("loadeddata", attemptPlay);
		};
	}, []);
	const content = {
		en: {
			title: "We bring spatial AI to freight forwarding",
			description: "Precise freight measurements – without additional hardware",
			callToAction: "Book demo",
		},
		de: {
			title: "Die KI für Ihr Umschlaglager",
			description: "Exakte Frachtvermessung – ganz ohne zusätzliche Hardware",
			callToAction: "Demo buchen",
		},
	};

	const { title, description, callToAction } =
		content[language as keyof typeof content];

	return (
		<section className="relative py-20 lg:py-32 overflow-hidden bg-black">
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
					{/* Video */}
					<div className="flex-1 flex items-center justify-center">
						<video
							ref={videoRef}
							autoPlay
							loop
							muted
							playsInline
							preload="auto"
							className="w-full max-w-2xl h-auto object-contain"
						>
							<source src="/video.mp4" type="video/mp4" />
						</video>
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
