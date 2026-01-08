import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default function Footer({ language }: { language: "en" | "de" }) {
	return (
		<footer className="text-white py-8 px-4 rounded-t-2xl shadow-lg mt-8 border-t border-gray-700">
			<div className="max-w-4xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
				<div className="flex flex-col items-center md:items-start gap-2">
					<p className="text-sm opacity-80">
						&copy; 2026 transload. All rights reserved.
					</p>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
					<a
						href="mailto:contact@trans-load.de"
						className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-orange-500/10 transition-colors text-base"
					>
						<Mail className="w-6 h-6" />
						<span className="hidden xs:inline">contact@trans-load.de</span>
					</a>
					<a
						href="https://www.linkedin.com/company/trans-load/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center px-3 py-2 rounded-lg hover:bg-orange-500/10 transition-colors"
					>
						<Linkedin className="w-6 h-6" />
					</a>
					<Link
						href="/impressum"
						className="px-3 py-2 rounded-lg hover:bg-orange-500/10 transition-colors text-base"
					>
						{language === "en" ? "Legal Notice" : "Impressum"}
					</Link>
					<Link
						href="/privacy-policy"
						className="px-3 py-2 rounded-lg hover:bg-orange-500/10 transition-colors text-base"
					>
						{language === "en" ? "Privacy Policy" : "Datenschutzerklärung"}
					</Link>
				</div>
			</div>
		</footer>
	);
}
