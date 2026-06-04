import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Allow Replit dev preview origins
  allowedDevOrigins: ["*.replit.dev", "*.picard.replit.dev"],
  // Production: ensure env vars are surfaced to the client
  env: {
    NEXT_PUBLIC_SUPABASE_URL:             process.env.NEXT_PUBLIC_SUPABASE_URL             ?? "",
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "",
  },
};

export default nextConfig;
