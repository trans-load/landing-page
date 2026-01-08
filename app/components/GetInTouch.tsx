"use client";

import { Hand } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type Language = "en" | "de";

const content: Record<Language, { title: string }> = {
	en: {
		title: "Book demo",
	},
	de: {
		title: "Demo buchen",
	},
};

export default function GetInTouch({ language }: { language: Language }) {
	const { title } = content[language];
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "meet" });
			cal("ui", {
				cssVarsPerTheme: {
					light: { "cal-brand": "#dd6b20" },
					dark: { "cal-brand": "#dd6b20" },
				},
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);

	return (
		<section id="meeting" className="pt-16 lg:pt-20 pb-16 lg:pb-20 relative overflow-hidden bg-gray-900">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>
			{/* Section Header */}
			<div className="text-center mb-8">
				<div className="inline-flex items-center px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
					<Hand className="w-6 h-6" />
				</div>
				<h2 className="text-4xl font-bold text-white mx-4">{title}</h2>
			</div>
			<Cal
				namespace="meet"
				calLink="jago-wahl/meet"
				style={{ width: "100%", height: "100%", overflow: "scroll" }}
				config={{ layout: "month_view" }}
			/>
		</section>
	);
}
