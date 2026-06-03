"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Crown, Shield, Heart, Eye, Zap, Lock } from "lucide-react";

const values = [
  { icon: Shield, title: "Safety First", desc: "Every member is verified. We run background checks and maintain the highest security standards." },
  { icon: Eye, title: "Absolute Privacy", desc: "Your identity and activities are protected by military-grade encryption and strict data policies." },
  { icon: Heart, title: "Genuine Connections", desc: "We prioritize authentic chemistry over quantity. Quality over everything." },
  { icon: Crown, title: "Luxury Standard", desc: "From our platform design to our member experience, nothing less than excellence is acceptable." },
  { icon: Zap, title: "Seamless Technology", desc: "Cutting-edge matching and communication tools that remove friction from every interaction." },
  { icon: Lock, title: "Discretion Guaranteed", desc: "No public profiles, no social sharing. Your experience stays between you and your connection." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(212,175,55,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">Our Story</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-silver-100 mb-6">
            About <span className="text-gold-gradient">DohaHappyEndings</span>
          </h1>
          <p className="text-silver-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Born in the heart of Doha, we built the platform we always wished existed — one that
            treats its members with the dignity, discretion, and sophistication they deserve.
          </p>
        </motion.div>

        {/* Mission block */}
        <GlassCard className="p-10 mb-16 text-center" glow>
          <Crown className="w-14 h-14 text-gold-400 mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-silver-100 mb-4">Our Mission</h2>
          <p className="text-silver-400 max-w-2xl mx-auto leading-relaxed text-lg">
            To create the most trusted, elegant, and discreet adult connection platform in the
            Middle East — where every interaction is defined by mutual respect, genuine desire,
            and absolute privacy.
          </p>
        </GlassCard>

        {/* Values */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl font-bold text-silver-100">
              Our <span className="text-gold-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <GlassCard key={v.title} className="p-7" delay={i * 0.1}>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-silver-100 mb-3">{v.title}</h3>
                <p className="text-silver-500 text-sm leading-relaxed">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5"
        >
          {[
            { value: "2022", label: "Founded" },
            { value: "10K+", label: "Members" },
            { value: "500+", label: "Verified Givers" },
            { value: "4.9★", label: "Avg. Rating" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold-gradient mb-1">{s.value}</p>
              <p className="text-xs text-silver-500 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
