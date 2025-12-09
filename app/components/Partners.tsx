import Image from "next/image";
import { Users } from "lucide-react";

type Language = "en" | "de";

const content: Record<Language, { title: string }> = {
	en: {
		title: "Our Partners",
	},
	de: {
		title: "Unsere Partner",
	},
};

export default function Partners({ language = "de" }: { language?: Language }) {
	const { title } = content[language];

	return (
		<section className="py-16 lg:py-20 bg-black relative">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>
			
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Header */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-4">
						<Users className="w-6 h-6" />
					</div>
					<h2 className="text-4xl font-bold text-white mb-4">
						{title}
					</h2>
				</div>

				<div className="container mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto items-center">
					<Image
						src="./wahl_co_logo.png"
						alt="Wahl & Co"
						width={180}
						height={180}
						className="mx-auto brightness-0 invert p-2 w-32 md:w-32 lg:w-40"
					/>
					<Image
						src="./Xplore_logo.png"
						alt="Xplore by UnternehmerTUM"
						width={240}
						height={240}
						className="mx-auto logo-white p- w-40 md:w-48 lg:w-56"
					/>
					<Image
						src="./gottman.png"
						alt="The Gottman Initiative"
						width={240}
						height={240}
						className="mx-auto brightness-0 invert p-1s w-56 sm:w-56 lg:w-72"
					/>
					<Image
						src="./emc_logo.png"
						alt="TUM Entrepreneurial Master Class"
						width={180}
						height={180}
						className="mx-auto brightness-0 invert p-2 w-48 md:w-48 lg:w-56"
					/>
					<Image
						src="./UTUM_Logo.png"
						alt="UnternehmerTUM"
						width={120}
						height={120}
						className="mx-auto brightness-0 invert p-4 w-28 sm:w-32 md:w-38 lg:w-44"
					/>
					<Image
						src="./tumvl_logo_weiss_rgb.svg"
						alt="TUM Venture Labs"
						width={200}
						height={200}
						className="mx-auto p-4 w-32 md:w-36 lg:w-44"
					/>
					</div>
				</div>
			</div>
		</section>
	);
}
