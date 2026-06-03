"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Crown, Heart, ChevronRight } from "lucide-react";

export default function SignupChoicePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl"
      >
        <div className="text-center mb-14">
          <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">Get Started</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-silver-100 mb-4">
            Choose Your <span className="text-gold-gradient">Role</span>
          </h1>
          <p className="text-silver-400 max-w-md mx-auto">
            Tell us who you are. Both paths lead to extraordinary connections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Giver card */}
          <Link href="/signup/giver">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass rounded-3xl p-10 text-center cursor-pointer group relative overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors rounded-3xl" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-6 group-hover:shadow-gold-glow-sm transition-shadow">
                  <Crown className="w-10 h-10 text-gold-400" />
                </div>
                <h2 className="font-display text-2xl font-bold text-silver-100 mb-3">Pleasure Giver</h2>
                <p className="text-silver-500 text-sm leading-relaxed mb-6">
                  Create your profile, set your rates, and connect with premium clients seeking
                  unforgettable experiences.
                </p>
                <div className="flex items-center justify-center gap-2 text-gold-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  Join as Giver <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Client card */}
          <Link href="/signup/client">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass rounded-3xl p-10 text-center cursor-pointer group relative overflow-hidden border border-silver-400/10 hover:border-silver-400/30 transition-colors"
            >
              <div className="absolute inset-0 bg-silver-400/0 group-hover:bg-silver-400/[0.03] transition-colors rounded-3xl" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-silver-400/10 border border-silver-400/20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-silver-400" />
                </div>
                <h2 className="font-display text-2xl font-bold text-silver-100 mb-3">Client</h2>
                <p className="text-silver-500 text-sm leading-relaxed mb-6">
                  Browse verified pleasure givers, connect privately, and curate your perfect
                  experience with full discretion.
                </p>
                <div className="flex items-center justify-center gap-2 text-silver-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  Join as Client <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        <p className="text-center text-silver-600 text-sm mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-gold-400 hover:text-gold-300 transition-colors font-medium">
            Sign in here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
