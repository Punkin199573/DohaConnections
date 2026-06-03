import Link from "next/link";
import { Crown, Mail, Phone, MapPin, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Browse Profiles", href: "/browse" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Safety Guidelines", href: "/safety" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "DMCA", href: "/dmca" },
  ],
  join: [
    { label: "Join as Pleasure Giver", href: "/signup/giver" },
    { label: "Join as Client", href: "/signup/client" },
    { label: "Sign In", href: "/login" },
    { label: "Verification", href: "/verify" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#060606]">
      {/* Gold glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-gold-500" />
              <span className="font-display text-xl font-bold text-gold-gradient">
                DohaHappyEndings
              </span>
            </div>
            <p className="text-silver-500 text-sm leading-relaxed mb-6 max-w-xs">
              Doha&apos;s most exclusive and discreet connection platform. Where luxury
              meets desire with absolute privacy and unmatched elegance.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-2 text-sm text-silver-600">
              <a href="mailto:support@dohahappyendings.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4" />
                support@dohahappyendings.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Doha, Qatar
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-silver-500 hover:text-gold-400 hover:border-gold-500/40 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-silver-500 hover:text-gold-400 hover:border-gold-500/40 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-silver-500 hover:text-silver-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-silver-500 hover:text-silver-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-4">Join</h4>
            <ul className="space-y-3">
              {footerLinks.join.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-silver-500 hover:text-silver-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gold-500 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-silver-500 hover:text-silver-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-700">
          <p>© {new Date().getFullYear()} DohaHappyEndings. All rights reserved.</p>
          <p className="text-center">
            This platform is for adults 18+ only. By using this site you confirm you are of legal age.
          </p>
        </div>
      </div>
    </footer>
  );
}
