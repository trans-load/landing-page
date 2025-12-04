import Image from "next/image";

export default function Partners() {
	return (
		<section className="py-8 lg:py-12 bg-black relative">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto items-center">
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
				</div>
			</div>
		</section>
	);
}
