"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Crown, Eye, EyeOff, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { signUp } from "@/lib/supabase";

const services = [
  "Companionship", "Dinner Dates", "Travel Companion", "Massage",
  "Private Dance", "Couple Experiences", "GFE", "Roleplay",
  "Overnight", "Outcall", "Incall", "Virtual",
];

const steps = ["Account", "Profile", "Services", "Pricing"];

export default function GiverSignupPage() {
  const [step, setStep] = useState(0);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [form, setForm] = useState({
    email: "", password: "", stageName: "", age: "", location: "",
    bio: "", hourlyRate: "", overnight: "", currency: "QAR",
  });

  function update(key: string, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit() {
    setLoading(true);
    setError("");
    try {
      const { error: err } = await signUp(form.email, form.password, "giver", {
        stage_name: form.stageName,
        age: form.age,
        location: form.location,
        bio: form.bio,
        hourly_rate: form.hourlyRate,
        overnight_rate: form.overnight,
        currency: form.currency,
        services: selectedServices,
      });
      if (err) throw err;
      setSuccess(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-24">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="liquid-glass rounded-3xl p-12 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-gold-400" />
          </div>
          <h2 className="font-display text-3xl font-bold text-silver-100 mb-3">Welcome to the Elite</h2>
          <p className="text-silver-400 mb-8">Check your email to verify your account and complete your profile.</p>
          <Link href="/login" className="btn-gold text-black font-semibold px-8 py-3 rounded-full inline-block hover:scale-105 transition-transform">
            Sign In
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-5">
            <Crown className="w-7 h-7 text-gold-400" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 mb-2">
            Pleasure Giver <span className="text-gold-gradient">Signup</span>
          </h1>
          <p className="text-silver-500 text-sm">Join Doha&apos;s elite network</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 ${i <= step ? "text-gold-400" : "text-silver-700"}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border
                  ${i < step ? "bg-gold-500 border-gold-500 text-obsidian" : i === step ? "border-gold-500 text-gold-400" : "border-silver-800 text-silver-700"}`}>
                  {i < step ? <Check className="w-3 h-3" /> : i + 1}
                </div>
                <span className="text-xs font-medium hidden sm:block">{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`w-6 h-px ${i < step ? "bg-gold-500" : "bg-silver-800"}`} />}
            </div>
          ))}
        </div>

        <div className="liquid-glass rounded-3xl p-8">
          {error && (
            <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Step 0: Account */}
          {step === 0 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              <div>
                <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    placeholder="Min. 8 characters"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 pr-12 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-silver-600 hover:text-silver-400">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 1: Profile */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              {[
                { label: "Stage Name", key: "stageName", placeholder: "Your display name", type: "text" },
                { label: "Age", key: "age", placeholder: "Must be 18+", type: "number" },
                { label: "Location (District)", key: "location", placeholder: "e.g. West Bay, The Pearl", type: "text" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => update(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">Bio</label>
                <textarea
                  value={form.bio}
                  onChange={(e) => update("bio", e.target.value)}
                  placeholder="Tell potential clients about yourself..."
                  rows={4}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm resize-none"
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Services */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-silver-400 text-sm mb-5">Select all services you offer:</p>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                      selectedServices.includes(s)
                        ? "bg-gold-500/20 border-gold-500/60 text-gold-300"
                        : "bg-white/[0.03] border-white/10 text-silver-500 hover:border-white/20"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Pricing */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              <div>
                <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">Currency</label>
                <select
                  value={form.currency}
                  onChange={(e) => update("currency", e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-silver-200 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
                >
                  <option value="QAR">QAR — Qatari Riyal</option>
                  <option value="USD">USD — US Dollar</option>
                  <option value="EUR">EUR — Euro</option>
                  <option value="GBP">GBP — British Pound</option>
                </select>
              </div>
              {[
                { label: "Hourly Rate", key: "hourlyRate", placeholder: "e.g. 500" },
                { label: "Overnight Rate (optional)", key: "overnight", placeholder: "e.g. 2500" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">{field.label}</label>
                  <input
                    type="number"
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => update(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                  />
                </div>
              ))}
              <div className="p-4 rounded-xl bg-gold-500/5 border border-gold-500/20 text-xs text-silver-500 leading-relaxed">
                Your rates are visible only to verified clients. You set your own terms and can update them anytime.
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 glass border border-white/10 text-silver-400 px-5 py-3 rounded-full text-sm font-medium hover:border-white/20 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex-1 flex items-center justify-center gap-2 btn-gold text-black px-6 py-3 rounded-full text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 btn-gold text-black px-6 py-3 rounded-full text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Creating Account..." : "Complete Signup"}
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-silver-600 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-gold-400 hover:text-gold-300 transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
