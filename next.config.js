/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.dribbble.com', 'cloudflare-ipfs.com']
	}
}

module.exports = nextConfig
