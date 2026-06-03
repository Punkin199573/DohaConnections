"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Mail, MessageSquare, Clock, Check, ChevronRight, Shield } from "lucide-react";

const faqs = [
  { q: "Is my identity kept private?", a: "Absolutely. We use end-to-end encryption and never share personal data with third parties. Your identity is yours alone." },
  { q: "How are pleasure givers verified?", a: "All givers undergo identity verification, photo authenticity checks, and agree to our strict code of conduct before receiving a verified badge." },
  { q: "What payment methods are accepted?", a: "We accept major credit cards, bank transfers, and select cryptocurrency — all processed securely through our encrypted payment gateway." },
  { q: "Can I remain completely anonymous?", a: "Yes. Clients can use a display name and are never required to reveal their real identity to givers or on their public profile." },
  { q: "How do I report a problem?", a: "Use the in-app report button or email support@dohahappyendings.com. Our team responds within 2 hours, 24/7." },
  { q: "What is your cancellation policy?", a: "Cancellations more than 2 hours before a booking receive a full refund. Later cancellations are subject to a 20% fee." },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function update(key: string, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-5%,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-silver-100 mb-6">
            Contact <span className="text-gold-gradient">Us</span>
          </h1>
          <p className="text-silver-400 max-w-lg mx-auto">
            Our dedicated support team is available around the clock to assist with any questions
            or concerns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="liquid-glass rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-gold-400" />
                </div>
                <h2 className="font-display text-2xl font-bold text-silver-100 mb-3">Message Sent</h2>
                <p className="text-silver-400 text-sm">We&apos;ll get back to you within 2 hours. Thank you for reaching out.</p>
              </motion.div>
            ) : (
              <GlassCard className="p-8" hover={false}>
                <h2 className="font-display text-2xl font-bold text-silver-100 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Your name" },
                    { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
                    { label: "Subject", key: "subject", type: "text", placeholder: "How can we help?" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">{f.label}</label>
                      <input
                        type={f.type}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => update(f.key, e.target.value)}
                        placeholder={f.placeholder}
                        required
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs text-silver-500 uppercase tracking-widest font-medium mb-2 block">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us more..."
                      rows={5}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-obsidian px-6 py-3.5 rounded-full font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60"
                  >
                    {loading ? "Sending..." : (
                      <>Send Message <ChevronRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </GlassCard>
            )}
          </div>

          {/* Info + FAQ */}
          <div className="space-y-6">
            {/* Info cards */}
            {[
              { icon: Mail, title: "Email Support", detail: "support@dohahappyendings.com", sub: "Replies within 2 hours" },
              { icon: MessageSquare, title: "Live Chat", detail: "Available in the app", sub: "Instant responses" },
              { icon: Clock, title: "Support Hours", detail: "24 hours, 7 days a week", sub: "We never sleep" },
              { icon: Shield, title: "Privacy Concerns", detail: "privacy@dohahappyendings.com", sub: "Dedicated privacy team" },
            ].map((item, i) => (
              <GlassCard key={item.title} className="p-5 flex items-center gap-4" delay={i * 0.08}>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-medium text-silver-100 text-sm">{item.title}</p>
                  <p className="text-silver-300 text-sm">{item.detail}</p>
                  <p className="text-silver-600 text-xs mt-0.5">{item.sub}</p>
                </div>
              </GlassCard>
            ))}

            {/* FAQ */}
            <div className="mt-8">
              <h3 className="font-display text-xl font-bold text-silver-100 mb-4">Frequently Asked</h3>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <GlassCard key={i} className="overflow-hidden" hover={false}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left p-5 flex items-center justify-between gap-3"
                    >
                      <span className="text-sm font-medium text-silver-200">{faq.q}</span>
                      <ChevronRight className={`w-4 h-4 text-gold-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-90" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="px-5 pb-5"
                      >
                        <p className="text-sm text-silver-500 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
