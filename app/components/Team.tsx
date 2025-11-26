import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
	{
		name: "Victoria von Schmettow",
		role: "Co-Founder",
		image: "./vicky.JPG",
		linkedin: "https://www.linkedin.com/in/victoria-von-schmettow/",
		email: "mailto:victoria.schmettow@trans-load.de",
	},
	{
		name: "Nils Börner",
		role: "Co-Founder",
		image: "./nils.jpg",
		linkedin: "https://www.linkedin.com/in/boenils/",
		email: "mailto:nils.boerner@trans-load.de",
	},
	{
		name: "Jago Wahl-Schwentker",
		role: "Co-Founder",
		image: "./jago.jpg",
		linkedin: "https://www.linkedin.com/in/jagowahl/",
		email: "mailto:jago.wahl-schwentker@trans-load.de",
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
		<section id="team" className="pt-10 relative overflow-hidden">
			<div className="container mx-auto px-4 relative z-10 max-w-5xl">
			<div className="container mx-auto px-4 relative z-10 max-w-5xl">
				{/* Section Header */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
						<Users className="w-6 h-6" />
					</div>
					<h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
				</div>

				{/* Team Members Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 justify-items-center">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="group bg-gray-800 border border-gray-700 p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center max-w-sm w-full"
						>
							{/* Profile Image with hover effect */}
							<div className="relative mb-4 sm:mb-6">
								<div className="absolute inset-0 bg-orange-500/20 rounded-full blur-lg opacity-0 transition-opacity duration-300"></div>
								<Image
									src={member.image}
									alt={member.name}
									width={96}
									height={96}
									className="relative rounded-full mx-auto border-2 sm:border-4 border-gray-700 transition-colors duration-300 w-24 h-24 sm:w-40 sm:h-40"
								/>
							</div>

							{/* Member Info */}
							<h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-white transition-colors">
								{member.name}
							</h3>
							<div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
								{member.role}
							</div>

							{/* Social Links */}
							<div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="group/link flex items-center px-2 sm:px-4 py-1 sm:py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-orange-500 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
								>
									<Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-400" />
									<span className="text-xs sm:text-sm">LinkedIn</span>
									<ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 ml-0.5 sm:ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
								</a>
								<a
									href={member.email}
									target="_blank"
									rel="noopener noreferrer"
									className="group/link flex items-center px-2 sm:px-4 py-1 sm:py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-orange-500 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
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
