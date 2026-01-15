import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
	{
		name: "Nils Börner",
		role: "Co-Founder",
		image: "./nils.jpeg",
		linkedin: "https://www.linkedin.com/in/boenils/",
		email: "mailto:nils.boerner@trans-load.de",
	},
	{
		name: "Jago Wahl-Schwentker",
		role: "Co-Founder",
		image: "./jago.jpeg",
		linkedin: "https://www.linkedin.com/in/jagowahl/",
		email: "mailto:jago.wahl-schwentker@trans-load.de",
	},
	{
		name: "Julius Scheel",
		role: "Co-Founder",
		image: "./Julius Scheel.JPEG",
		linkedin: "https://www.linkedin.com/in/juliusscheel/",
		email: "mailto:julius.scheel@trans-load.de",
	},
];

const content = {
	en: {
		title: "Our Team",
	},
	de: {
		title: "Unser Team",
	},
};

export default function Team({ language }: { language: "en" | "de" }) {
	const { title } = content[language];

	return (
		<section id="team" className="py-16 lg:py-20 relative overflow-hidden bg-gray-900">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>
			<div className="container mx-auto px-4 relative z-10 max-w-5xl">
				{/* Section Header */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
						<Users className="w-6 h-6" />
					</div>
					<h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
				</div>

				{/* Team Members Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 justify-items-center">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-8 shadow-lg shadow-black/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center max-w-[280px] sm:max-w-sm w-full before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50 before:pointer-events-none"
						>
							{/* Profile Image */}
							<div className="relative mb-4 sm:mb-6 z-10">
								<Image
									src={member.image}
									alt={member.name}
									width={96}
									height={96}
									className="relative rounded-full mx-auto border-2 sm:border-4 border-white/20 backdrop-blur-sm group-hover:border-orange-500/40 transition-colors duration-300 w-24 h-24 sm:w-40 sm:h-40 object-cover"
								/>
							</div>

							{/* Member Info */}
							<h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-white transition-colors relative z-10">
								{member.name}
							</h3>
							<div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 backdrop-blur-sm bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 relative z-10">
								{member.role}
							</div>

							{/* Social Links */}
							<div className="flex flex-row justify-center gap-2 relative z-10">
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="group/link flex items-center px-2 sm:px-4 py-1 sm:py-2 backdrop-blur-md bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white transition-all duration-300"
								>
									<Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-400" />
									<span className="text-xs sm:text-sm">LinkedIn</span>
									<ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 ml-0.5 sm:ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
								</a>
								<a
									href={member.email}
									target="_blank"
									rel="noopener noreferrer"
									className="group/link flex items-center px-2 sm:px-4 py-1 sm:py-2 backdrop-blur-md bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 rounded-lg text-gray-200 hover:text-white transition-all duration-300"
								>
									<Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-orange-400" />
									<span className="text-xs sm:text-sm">Email</span>
									<ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 ml-0.5 sm:ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
