"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface SectionContextType {
	getSectionBg: (index: number) => string;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
	const getSectionBg = (index: number): string => {
		return index % 2 === 0 ? "bg-gray-900" : "bg-gray-800";
	};

	return (
		<SectionContext.Provider value={{ getSectionBg }}>
			{children}
		</SectionContext.Provider>
	);
}

export function useSectionBg(index: number): string {
	const context = useContext(SectionContext);
	if (context === undefined) {
		throw new Error("useSectionBg must be used within a SectionProvider");
	}
	return context.getSectionBg(index);
}
