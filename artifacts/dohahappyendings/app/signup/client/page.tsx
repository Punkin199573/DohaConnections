"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Eye, EyeOff, ChevronRight, Check } from "lucide-react";
import { signUp } from "@/lib/supabase";

const preferences = [
  "Female", "Male", "Non-binary", "Couple Experiences",
  "Massage", "Companionship", "Dinner Dates", "Travel",
  "Overnight", "GFE", "Roleplay", "Virtual",
];

export default function ClientSignupPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedPrefs, setSelectedPrefs] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);

  const [form, setForm] = useState({
    email: "", password: "", displayName: "", age: "", location: "", budget: "",
  });

  function update(key: string, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function togglePref(p: string) {
    setSelectedPrefs((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) { setError("You must confirm you are 18+ to continue."); return; }
    setLoading(true);
    setError("");
    try {
      const { error: err } = await signUp(form.email, form.password, "client", {
        display_name: form.displayName,
        age: form.age,
        location: form.location,
        budget: form.budget,
        preferences: selectedPrefs,
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
          <div className="w-20 h-20 rounded-full bg-silver-400/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-silver-400" />
          </div>
          <h2 className="font-display text-3xl font-bold text-silver-100 mb-3">Welcome</h2>
          <p className="text-silver-400 mb-8">Check your email to verify your account and start browsing.</p>
          <Link href="/browse" className="bg-gold-gradient text-obsidian font-semibold px-8 py-3 rounded-full inline-block hover:scale-105 transition-transform">
            Browse Profiles
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(192,192,192,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl bg-silver-400/10 border border-silver-400/20 flex items-center justify-center mx-auto mb-5">
            <Heart className="w-7 h-7 text-silver-400" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 mb-2">
            Client <span className="text-gold-gradient">Signup</span>
          </h1>
          <p className="text-silver-500 text-sm">Discover your perfect experience</p>
        </div>

        <div className="liquid-glass rounded-3xl p-8">
          {error && (
            <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
              { label: "Display Name", key: "displayName", type: "text", placeholder: "How you appear to givers" },
              { label: "Age", key: "age", type: "number", placeholder: "Must be 18+" },
              { label: "Location (District)", key: "location", type: "text", placeholder: "e.g. The Pearl, Lusail" },
              { label: "Monthly Budget (QAR, optional)", key: "budget", type: "number", placeholder: "e.g. 5000" },
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

            {/* Password */}
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

            {/* Preferences */}
            <div>
              <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-3 block">Preferences (optional)</label>
              <div className="flex flex-wrap gap-2">
                {preferences.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => togglePref(p)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      selectedPrefs.includes(p)
                        ? "bg-gold-500/20 border-gold-500/60 text-gold-300"
                        : "bg-white/[0.03] border-white/10 text-silver-500 hover:border-white/20"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Age confirmation */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`mt-0.5 w-5 h-5 rounded-md border flex-shrink-0 flex items-center justify-center transition-colors ${
                  agreed ? "bg-gold-500 border-gold-500" : "border-white/20 group-hover:border-gold-500/40"
                }`}
              >
                {agreed && <Check className="w-3 h-3 text-obsidian" />}
              </div>
              <span className="text-xs text-silver-500 leading-relaxed">
                I confirm I am 18 years or older and agree to the{" "}
                <Link href="/terms" className="text-gold-400 hover:underline">Terms of Service</Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-gold-400 hover:underline">Privacy Policy</Link>.
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-obsidian px-6 py-3.5 rounded-full font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Creating Account..." : (
                <>Create Client Account <ChevronRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
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
