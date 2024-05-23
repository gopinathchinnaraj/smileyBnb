/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "avatars.githubsercontent.com",
            "lh3.googlesercontent.com",
            "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig