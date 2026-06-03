"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Crown, ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="font-display text-[10rem] font-bold text-gold-gradient leading-none mb-4 select-none">
          404
        </p>
        <h1 className="font-display text-3xl font-bold text-silver-100 mb-3">Page Not Found</h1>
        <p className="text-silver-500 mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold-gradient text-obsidian font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform"
        >
          <Crown className="w-4 h-4" /> Return Home <ChevronRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
