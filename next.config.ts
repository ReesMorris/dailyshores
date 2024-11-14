import type { NextConfig } from 'next';
import { withPlausibleProxy } from 'next-plausible';

const nextConfig: NextConfig = withPlausibleProxy({
  customDomain: process.env.PLAUSIBLE_URL
})({
  /* config options here */
});

export default nextConfig;
