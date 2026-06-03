"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import {
  Shield, Star, Zap, Eye, Heart, Lock, ChevronRight, Crown, Sparkles
} from "lucide-react";

const stats = [
  { value: "10K+", label: "Active Members" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "100%", label: "Discreet" },
  { value: "24/7", label: "Support" },
];

const features = [
  {
    icon: Lock,
    title: "Absolute Privacy",
    desc: "End-to-end encrypted messaging and anonymous browsing. Your identity stays yours.",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    desc: "Every profile undergoes rigorous verification. Zero fake accounts, guaranteed.",
  },
  {
    icon: Star,
    title: "Elite Selection",
    desc: "Curated network of premium pleasure givers available across Doha.",
  },
  {
    icon: Zap,
    title: "Instant Connection",
    desc: "Connect in seconds. Our smart matching puts you face-to-face instantly.",
  },
  {
    icon: Eye,
    title: "Discreet Browsing",
    desc: "Browse profiles privately. No activity logs shared with third parties.",
  },
  {
    icon: Heart,
    title: "Perfect Matches",
    desc: "Advanced matching algorithms ensure compatibility and mutual satisfaction.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create Your Account",
    desc: "Sign up as a Pleasure Giver or Client in under 3 minutes with our seamless onboarding.",
  },
  {
    num: "02",
    title: "Build Your Profile",
    desc: "Showcase who you are — or browse who speaks to you — with rich, verified profiles.",
  },
  {
    num: "03",
    title: "Connect & Experience",
    desc: "Message privately, set terms, and create unforgettable, discreet experiences.",
  },
];

const testimonials = [
  {
    quote: "The most sophisticated platform I've encountered. Privacy is genuinely respected here.",
    name: "A.K.",
    role: "Client Member",
    stars: 5,
  },
  {
    quote: "As a pleasure giver, DohaHappyEndings gave me full control over my bookings and clientele.",
    name: "S.M.",
    role: "Verified Pleasure Giver",
    stars: 5,
  },
  {
    quote: "Elegant, fast, discreet. Exactly what Doha has been missing.",
    name: "R.H.",
    role: "Premium Client",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
        {/* Radial gold glow bg */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />
        {/* Floating orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] bg-gold-500 blur-3xl pointer-events-none -top-40 -left-40"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] bg-gold-400 blur-3xl pointer-events-none -bottom-20 -right-20"
          animate={{ scale: [1, 1.15, 1], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 glass px-4 py-2 rounded-full border-gold-glow"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs font-medium text-silver-300 tracking-widest uppercase">
            Doha&apos;s Most Exclusive Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl mb-6"
        >
          Where{" "}
          <span className="text-gold-gradient">Desire</span>
          <br />
          Meets{" "}
          <span className="text-silver-gradient">Discretion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-silver-400 text-center text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Doha&apos;s premier luxury connection platform. Verified profiles, encrypted
          communication, and unmatched elegance — all in one seamless experience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link
            href="/signup/giver"
            className="group relative overflow-hidden flex items-center gap-2 bg-gold-gradient text-obsidian font-semibold text-base px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-gold-glow-sm"
          >
            <Crown className="w-5 h-5" />
            Join as Pleasure Giver
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="/signup/client"
            className="flex items-center gap-2 glass border-gold-glow text-silver-200 font-semibold text-base px-8 py-4 rounded-full hover:text-gold-400 hover:border-gold-500/50 transition-all"
          >
            Find Your Experience
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-3xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center">
              <p className="font-display text-3xl font-bold text-gold-gradient mb-1">{stat.value}</p>
              <p className="text-xs text-silver-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ======================== FEATURES ======================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">Why Choose Us</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 mb-4">
              Built for the <span className="text-gold-gradient">Elite</span>
            </h2>
            <p className="text-silver-500 max-w-xl mx-auto">
              Every feature engineered for maximum pleasure, privacy, and prestige.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <GlassCard key={f.title} className="p-7" glow delay={i * 0.1}>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-silver-100 mb-3">{f.title}</h3>
                <p className="text-silver-500 text-sm leading-relaxed">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== HOW IT WORKS ======================== */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">Simple Process</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 mb-4">
              Three Steps to <span className="text-gold-gradient">Bliss</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full gold-border-animated flex items-center justify-center mx-auto">
                    <span className="font-display text-2xl font-bold text-gold-gradient">{step.num}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-silver-100 mb-3">{step.title}</h3>
                <p className="text-silver-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-14"
          >
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-gold-gradient text-obsidian font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-gold-glow-sm"
            >
              Get Started Today
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ======================== TESTIMONIALS ======================== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">Member Stories</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100">
              Trusted by <span className="text-gold-gradient">Thousands</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <GlassCard key={t.name} className="p-7" delay={i * 0.1}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-silver-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-silver-100">{t.name}</p>
                  <p className="text-xs text-gold-500 mt-0.5">{t.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CTA BANNER ======================== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center" glow>
            <div className="absolute inset-0 bg-gold-gradient opacity-[0.03] rounded-2xl pointer-events-none" />
            <Crown className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 mb-4">
              Your Next Chapter Awaits
            </h2>
            <p className="text-silver-400 max-w-lg mx-auto mb-10">
              Join thousands of discerning members who have already discovered Doha&apos;s finest
              connection experience. Discreet. Verified. Extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup/giver"
                className="group relative overflow-hidden flex items-center justify-center gap-2 bg-gold-gradient text-obsidian font-semibold px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-transform"
              >
                <Crown className="w-5 h-5" />
                I&apos;m a Pleasure Giver
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/signup/client"
                className="flex items-center justify-center gap-2 glass border-gold-glow text-silver-200 font-semibold px-8 py-4 rounded-full hover:text-gold-400 transition-all"
              >
                I&apos;m a Client
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
