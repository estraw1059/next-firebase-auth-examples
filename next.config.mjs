/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
    env: {
      NEXT_PRIVATE_FIREBASE_API_KEY: process.env.NEXT_PRIVATE_FIREBASE_API_KEY,
      NEXT_PRIVATE_CLIENT_EMAIL: process.env.NEXT_PRIVATE_CLIENT_EMAIL,
      AUTH_COOKIE_SIGNATURE_KEY_CURRENT: process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT,
      AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS: process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS,
      AUTH_COOKIE_NAME: process.env.AUTH_COOKIE_NAME,
      USE_SECURE_COOKIES: process.env.USE_SECURE_COOKIES,
    }
}
export default nextConfig;
