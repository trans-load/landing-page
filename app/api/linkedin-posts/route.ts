import { NextResponse } from "next/server";

interface LinkedInPost {
	id: string;
	embedUrl: string;
	url: string;
	timestamp: string;
}

// LinkedIn Company Page URL
const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/trans-load";

// LinkedIn post URLs - these are the actual posts from the company page
const MANUAL_POST_URLS: string[] = [
	"https://www.linkedin.com/feed/update/urn:li:activity:7407749504197902337",
	"https://www.linkedin.com/feed/update/urn:li:activity:7405179220962009088",
	"https://www.linkedin.com/feed/update/urn:li:activity:7404819503622307842",
	"https://www.linkedin.com/feed/update/urn:li:activity:7401637645799305217",
	"https://www.linkedin.com/feed/update/urn:li:activity:7387783613838295040",
	"https://www.linkedin.com/feed/update/urn:li:activity:7368988364412190720",
	"https://www.linkedin.com/feed/update/urn:li:activity:7335734971724132352",
];

// Post timestamps for sorting (optional - used to maintain chronological order)
const POST_TIMESTAMPS: Record<string, string> = {
	"7407749504197902337": new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
	"7405179220962009088": new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
	"7404819503622307842": new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
	"7401637645799305217": new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
	"7387783613838295040": new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), // ~1.5 months ago
	"7368988364412190720": new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(), // ~3 months ago
	"7335734971724132352": new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(), // ~4 months ago
};

// LinkedIn oEmbed endpoint
const LINKEDIN_OEMBED_URL = "https://www.linkedin.com/embeds";

async function fetchPostData(postUrl: string): Promise<LinkedInPost | null> {
	try {
		// Extract activity ID from URL
		// URL format: https://www.linkedin.com/feed/update/urn:li:activity:7401637645799305217
		const activityMatch = postUrl.match(/urn:li:activity:(\d+)/);
		if (!activityMatch) {
			console.error(`Could not extract activity ID from URL: ${postUrl}`);
			return null;
		}
		
		const activityId = activityMatch[0]; // Full URN: urn:li:activity:7401637645799305217
		const postId = activityMatch[1]; // Just the ID: 7401637645799305217
		
		// Create embed URL
		// Format: https://www.linkedin.com/embed/feed/update/urn:li:activity:ACTIVITY_ID?collapsed=1
		const embedUrl = `https://www.linkedin.com/embed/feed/update/${activityId}?collapsed=1`;
		
		// Get timestamp for sorting if available
		const timestamp = POST_TIMESTAMPS[postId] || new Date().toISOString();
		
		return {
			id: postId,
			embedUrl: embedUrl,
			url: postUrl,
			timestamp: timestamp,
		};
	} catch (error) {
		console.error(`Error fetching post data for ${postUrl}:`, error);
		return null;
	}
}

export async function GET() {
	try {
		let posts: LinkedInPost[] = [];

		// Option 1: Use manual post URLs (recommended for quick setup)
		if (MANUAL_POST_URLS.length > 0) {
			const postPromises = MANUAL_POST_URLS.map(url => fetchPostData(url));
			const fetchedPosts = await Promise.all(postPromises);
			posts = fetchedPosts.filter((post): post is LinkedInPost => post !== null);
			
			// Sort posts by timestamp (newest first)
			posts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
		}

		// Option 2: Try to fetch from LinkedIn RSS feed (rarely available)
		try {
			const rssUrl = `${LINKEDIN_COMPANY_URL}/feed/`;
			const rssResponse = await fetch(rssUrl, {
				headers: {
					'User-Agent': 'Mozilla/5.0 (compatible; LinkedInBot/1.0)',
				},
			});
			
			if (rssResponse.ok) {
				// Parse RSS feed if available
				// This would require an RSS parser library
			}
		} catch (rssError) {
			// RSS feed not available, continue with other methods
		}

		// Option 3: Use LinkedIn Marketing API (requires OAuth setup)
		// This would require:
		// - LinkedIn App credentials (Client ID, Client Secret)
		// - OAuth token generation
		// - API calls to LinkedIn's Marketing Developer Platform
		
		// For production, consider:
		// - Setting up a cron job or webhook to fetch posts periodically
		// - Using a service like n8n, Zapier, or Make.com
		// - Implementing proper caching with Next.js revalidation

		return NextResponse.json({ posts });
	} catch (error) {
		console.error("Error fetching LinkedIn posts:", error);
		return NextResponse.json(
			{ error: "Failed to fetch LinkedIn posts", posts: [] },
			{ status: 500 }
		);
	}
}

// Note: To properly fetch LinkedIn posts, you need one of these approaches:
// 1. LinkedIn Marketing Developer Platform API (requires app approval)
// 2. Manual post URLs (add URLs to MANUAL_POST_URLS array)
// 3. Web scraping with proper rate limiting (check LinkedIn's ToS)
// 4. Third-party services that provide LinkedIn data APIs

