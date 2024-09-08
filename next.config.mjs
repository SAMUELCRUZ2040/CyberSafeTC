// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [ "www.userogue.com", "images.unsplash.com", "img.freepik.com", "cdn.pixabay.com"],
  },
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico", // /public path
        href: "/icons/favicon.ico", // /public path
      },
    ],
  },
}
 
export default nextConfig