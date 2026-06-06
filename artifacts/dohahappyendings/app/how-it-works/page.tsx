"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { Crown, Heart, UserPlus, Search, MessageSquare, Calendar, CreditCard, Star, ChevronRight, Shield } from "lucide-react";

const giverSteps = [
  { icon: UserPlus, step: "01", title: "Create Your Profile", desc: "Sign up, set your stage name, write a compelling bio, and upload photos. Our team reviews all profiles within 24 hours." },
  { icon: Shield, step: "02", title: "Get Verified", desc: "Complete identity verification to earn our 'Verified' badge — clients actively seek verified givers." },
  { icon: CreditCard, step: "03", title: "Set Your Rates", desc: "Define your pricing for different services. You have full control — set minimums, overnight rates, and availability." },
  { icon: MessageSquare, step: "04", title: "Receive Requests", desc: "Clients send encrypted booking requests. Review, accept, or decline — always on your terms." },
  { icon: Calendar, step: "05", title: "Meet & Earn", desc: "Confirm bookings, meet clients, and receive secure payment. Funds are held in escrow until completion." },
  { icon: Star, step: "06", title: "Build Reputation", desc: "Great reviews attract premium clients. Our top givers earn 5-figure monthly incomes." },
];

const clientSteps = [
  { icon: UserPlus, step: "01", title: "Register Discreetly", desc: "Create an anonymous account in minutes. No real name required — choose a display name of your choice." },
  { icon: Search, step: "02", title: "Browse Profiles", desc: "Filter by location, services, rating, and price. Every profile is verified and photos are genuine." },
  { icon: Heart, step: "03", title: "Save Favorites", desc: "Build your personal list of favorite givers and get notified when they have availability." },
  { icon: MessageSquare, step: "04", title: "Message Privately", desc: "Initiate contact through our encrypted messaging system. All conversations are private and never stored." },
  { icon: CreditCard, step: "05", title: "Book & Pay Securely", desc: "Confirm your experience and pay securely. Funds are held safely until you confirm satisfaction." },
  { icon: Star, step: "06", title: "Leave a Review", desc: "Share your anonymous experience review to help the community and reward exceptional givers." },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-5%,rgba(255,215,0,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">Simple & Seamless</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-silver-100 mb-6">
            How It <span className="text-gold-gradient">Works</span>
          </h1>
          <p className="text-silver-400 text-lg max-w-xl mx-auto">
            Whether you&apos;re giving or receiving, the process is designed to be effortless,
            discreet, and completely in your control.
          </p>
        </motion.div>

        {/* Toggle section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Pleasure Givers */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <Crown className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-silver-100">For Pleasure Givers</h2>
                <p className="text-gold-500 text-xs uppercase tracking-widest">Your path to premium earnings</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {giverSteps.map((step, i) => (
                <GlassCard key={step.step} className="p-6" delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-gold-400" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gold-600 text-xs font-bold">{step.step}</span>
                        <h3 className="font-semibold text-silver-100">{step.title}</h3>
                      </div>
                      <p className="text-silver-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/signup/giver"
                className="inline-flex items-center gap-2 btn-gold text-black font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform"
              >
                <Crown className="w-4 h-4" /> Join as Pleasure Giver <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* For Clients */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-10 rounded-xl bg-silver-400/10 border border-silver-400/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-silver-400" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-silver-100">For Clients</h2>
                <p className="text-silver-500 text-xs uppercase tracking-widest">Your path to unforgettable experiences</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {clientSteps.map((step, i) => (
                <GlassCard key={step.step} className="p-6" delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-silver-400/[0.08] border border-silver-400/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-silver-400" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-silver-600 text-xs font-bold">{step.step}</span>
                        <h3 className="font-semibold text-silver-100">{step.title}</h3>
                      </div>
                      <p className="text-silver-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/signup/client"
                className="inline-flex items-center gap-2 glass border-gold-glow text-silver-200 font-semibold px-8 py-3.5 rounded-full hover:text-gold-400 transition-all"
              >
                Join as Client <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
