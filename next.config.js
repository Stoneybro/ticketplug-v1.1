/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports ={
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300; // Check for changes every 300 milliseconds
    return config;
  },
};
