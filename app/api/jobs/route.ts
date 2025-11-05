// app/api/jobs/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Job} from "@/lib/types";
// ---------------------------------------------------------------------
// GET /api/jobs?id=...
// ---------------------------------------------------------------------
export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get('id');

	// Validate id
	if (!id) {
		return NextResponse.json(
			{ error: 'Missing required query parameter: id' },
			{ status: 400 }
		);
	}

	// Validate environment variable
	const API_URL = process.env.API_URL;
	if (!API_URL) {
		return NextResponse.json(
			{ error: 'API_URL is not configured' },
			{ status: 500 }
		);
	}

	try {
		const response = await fetch(`${API_URL}/jobs/${id}`, {
			cache: 'no-store', // Optional: prevent caching
			headers: {
				// Add auth if needed
				// 'Authorization': `Bearer ${process.env.API_KEY}`,
			},
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('External API error:', response.status, errorText);
			return NextResponse.json(
				{ error: 'Failed to fetch job from external API' },
				{ status: response.status }
			);
		}

		const job: Job = await response.json();
		return NextResponse.json(job);
	} catch (error) {
		console.error('Fetch error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}