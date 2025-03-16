import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedEnv: true,
    authInterrupts: true,
    dynamicIO: true,
  },
  transpilePackages: ['geist'],
};

export default nextConfig;
