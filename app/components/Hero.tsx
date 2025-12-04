import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";

export default function Hero({ language }: { language: "en" | "de" }) {
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
		<section className="relative py-20 lg:py-32 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700"></div>
				<div className="absolute inset-0 bg-[url('/bg_image.png')] bg-cover bg-center opacity-30"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto flex justify-center">
					{/* Card */}
					<div className="backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 px-8 py-10 w-full text-center">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
							<span className="text-white">
								{title.split(" ").slice(0, -3).join(" ")}
							</span>
							<br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
								{title.split(" ").slice(-3).join(" ")}
							</span>
						</h1>{" "}
						<p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
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
