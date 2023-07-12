/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "img.freepik.com", // if we have external images, we should define domains here
    ],
  },
};

module.exports = nextConfig;
