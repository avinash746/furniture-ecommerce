const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.wiloke.com', 'plugins.wiloke.com', 'plus.unsplash.com', 'via.placeholder.com' , "www.royalzig.com" ,"antiquehomedecors.com" ,  "indune.com" ],
  },
  reactStrictMode: true,
  env: {
    domain: 'https://theroyal.vercel.app/',
    NEXTAUTH_URL:'http://localhost:3000/api/auth' ,
    NEXTAUTH_SECRET: 'vjvjvjvbkbkkjggug',
  },
};




export default nextConfig;  // ES module syntax for export
