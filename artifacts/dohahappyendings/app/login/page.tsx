"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Crown, Eye, EyeOff, ChevronRight } from "lucide-react";
import { signIn } from "@/lib/supabase";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error: err } = await signIn(form.email, form.password);
      if (err) throw err;
      window.location.href = "/browse";
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_10%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-5">
            <Crown className="w-7 h-7 text-gold-400" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 mb-2">
            Welcome <span className="text-gold-gradient">Back</span>
          </h1>
          <p className="text-silver-500 text-sm">Sign in to your account</p>
        </div>

        <div className="liquid-glass rounded-3xl p-8">
          {error && (
            <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com"
                required
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-silver-500 uppercase tracking-widest font-medium">Password</label>
                <Link href="/forgot-password" className="text-xs text-gold-400 hover:text-gold-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  placeholder="Your password"
                  required
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 pr-12 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-silver-600 hover:text-silver-400">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-obsidian px-6 py-3.5 rounded-full font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : (
                <>Sign In <ChevronRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-silver-600 text-sm">
              New to DohaHappyEndings?{" "}
              <Link href="/signup" className="text-gold-400 hover:text-gold-300 transition-colors font-medium">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
