export const getBaseUrl = () => {
  // ✅ 1. If running in the browser, just use relative URLs
  if (typeof window !== "undefined") return "";

  // ✅ 2. If running on Vercel (production)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // ✅ 3. If running locally (dev)
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  // ✅ 4. Fallback to localhost only during local dev server, not build
  return "http://localhost:3000";
};