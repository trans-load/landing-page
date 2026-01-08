"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Linkedin, Loader2, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

type Language = "en" | "de";

interface LinkedInPost {
	id: string;
	embedUrl: string;
	url: string;
	timestamp: string;
}

const content: Record<Language, { title: string }> = {
	en: {
		title: "Latest Updates",
	},
	de: {
		title: "Aktuelle Updates",
	},
};

export default function LinkedIn({ language }: { language: Language }) {
	const [posts, setPosts] = useState<LinkedInPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [emblaRef, emblaApi] = useEmblaCarousel({ 
		align: "start",
		loop: false,
		skipSnaps: false,
		dragFree: true,
	});

	const { title } = content[language];
	const linkedinUrl = "https://www.linkedin.com/company/trans-load";

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);
				const response = await fetch("/api/linkedin-posts");
				if (!response.ok) {
					throw new Error("Failed to fetch LinkedIn posts");
				}
				const data = await response.json();
				// Posts are already sorted newest first from API, use as-is (newest on left)
				setPosts(data.posts || []);
			} catch (err) {
				console.error("Error fetching LinkedIn posts:", err);
				setError(err instanceof Error ? err.message : "Failed to load posts");
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	return (
		<section className="py-16 lg:py-20 relative overflow-hidden bg-gray-900">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-orange-500/30"></div>
			
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
							<Linkedin className="w-6 h-6" />
						</div>
					<h2 className="text-4xl font-bold text-white mb-4">
						{title}
					</h2>
					</div>

					{/* Posts Container */}
					{loading ? (
						<div className="flex justify-center items-center py-20">
							<Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
						</div>
					) : error ? (
						<div className="text-center py-20">
							<p className="text-gray-400 mb-4">{error}</p>
							<a
								href={linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
							>
								Visit our LinkedIn page
								<ExternalLink className="w-4 h-4" />
							</a>
						</div>
					) : posts.length > 0 ? (
						<div className="relative">
							{/* Navigation Buttons */}
							<button
								onClick={scrollPrev}
								className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-4 lg:-translate-x-12 p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/20 hover:border-blue-500/50 hover:bg-black/90 transition-all duration-300 shadow-lg"
								aria-label="Previous post"
							>
								<ChevronLeft className="w-6 h-6 text-white" />
							</button>
							<button
								onClick={scrollNext}
								className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-4 lg:translate-x-12 p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/20 hover:border-blue-500/50 hover:bg-black/90 transition-all duration-300 shadow-lg"
								aria-label="Next post"
							>
								<ChevronRight className="w-6 h-6 text-white" />
							</button>

							{/* Carousel Container */}
							<div className="overflow-hidden px-4 sm:px-8 lg:px-16" ref={emblaRef}>
								<div className="flex gap-4 sm:gap-8">
									{posts.map((post, index) => (
										<div
											key={post.id}
											className="flex-shrink-0 flex-grow-0 w-[calc(100vw-4rem)] sm:w-[400px] md:w-[450px] lg:w-[504px]"
										>
											<iframe
												src={`${post.embedUrl}&theme=dark`}
												height="670"
												width="100%"
												frameBorder="0"
												allowFullScreen
												title={`LinkedIn post ${index + 1}`}
												loading="lazy"
												className="w-full"
												style={{ maxWidth: "100%" }}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					) : (
						<div className="text-center py-20">
							<p className="text-gray-400 mb-4">No posts available at the moment.</p>
							<a
								href={linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
							>
								Visit our LinkedIn page
								<ExternalLink className="w-4 h-4" />
							</a>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

