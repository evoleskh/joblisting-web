import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**', // Or specify exact domains like 'example.com'
			},
		],
	},
};

export default nextConfig;