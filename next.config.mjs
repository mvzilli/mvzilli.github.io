/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      loader: 'akamai',
      path: '',
    },
    images: { 
      unoptimized: true 
    } 
  };
  
export default nextConfig;
