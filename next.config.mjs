import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default withSentryConfig(nextConfig, {
  org: process.env.NEXT_PUBLIC_SENTRY_ORG_NAME,
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT_NAME,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  silent: false
});
