import "@/app/_styles/globals.css";

export const metadata = {
	title: "transload",
	description: "Die KI für Ihr Umschlaglager: Exakte Frachtvermessung – ganz ohne zusätzliche Hardware.",
	themeColor: "#0C3A5F",
	keywords: [
		// Deutsch
		"Frachtvermessung",
		"Frachtvermessung KI",
		"Frachtabmessungen",
		"Spedition",
		"Umschlaglager",
		"Frachtvermessung Software",
		"KI Frachtvermessung",
		"Automatische Frachtvermessung",
		"LKW Auslastung",
		"Frachtabrechnung",
		"Spatial AI",
		"Räumliche KI",
		"Frachtlogistik",
		"DSGVO-konform Frachtvermessung",
		"Hardware-freie Vermessung",

		// Englisch
		"Freight Dimensioning",
		"Freight Measurement",
		"Freight Forwarding AI",
		"Spatial AI",
		"Cargo Dimensioning",
		"Freight Dimensions",
		"Automated Freight Measurement",
		"AI Freight Dimensioning",
		"Freight Billing",
		"Truck Utilization",
		"Freight Forwarding Software",
		"Camera-based Dimensioning",
		"Hardware-free Dimensioning",
		"GDPR-compliant Freight Measurement",
		"Logistics AI",
	],
	openGraph: {
		type: "website",
		url: "https://www.trans-load.de",
		title: "transload",
		description: "Die KI für Ihr Umschlaglager: Exakte Frachtvermessung – ganz ohne zusätzliche Hardware.",
		images: "./open_graph.png",
	},
	icons: {
		icon: "./favicon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de">
			<body>{children}</body>
		</html>
	);
}
