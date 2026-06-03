"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Star, MapPin, Crown, Heart, Shield } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const mockProfiles = [
  { id: 1, name: "Aria", age: 24, location: "The Pearl", rating: 4.9, reviews: 48, verified: true, services: ["GFE", "Companionship", "Dinner Dates"], rate: "700 QAR/hr", image: "bg-gradient-to-br from-rose-900/40 to-gold-900/20" },
  { id: 2, name: "Luna", age: 26, location: "West Bay", rating: 5.0, reviews: 62, verified: true, services: ["Massage", "Couple Experiences", "Outcall"], rate: "850 QAR/hr", image: "bg-gradient-to-br from-purple-900/40 to-gold-900/20" },
  { id: 3, name: "Sofia", age: 22, location: "Lusail", rating: 4.8, reviews: 31, verified: true, services: ["Travel Companion", "GFE", "Private Dance"], rate: "600 QAR/hr", image: "bg-gradient-to-br from-blue-900/40 to-gold-900/20" },
  { id: 4, name: "Zara", age: 28, location: "The Pearl", rating: 4.9, reviews: 77, verified: true, services: ["Overnight", "Dinner Dates", "Roleplay"], rate: "900 QAR/hr", image: "bg-gradient-to-br from-emerald-900/40 to-gold-900/20" },
  { id: 5, name: "Nina", age: 25, location: "Msheireb", rating: 4.7, reviews: 23, verified: false, services: ["Massage", "Companionship", "Virtual"], rate: "500 QAR/hr", image: "bg-gradient-to-br from-amber-900/40 to-gold-900/20" },
  { id: 6, name: "Riya", age: 23, location: "West Bay", rating: 5.0, reviews: 89, verified: true, services: ["GFE", "Outcall", "Overnight"], rate: "1000 QAR/hr", image: "bg-gradient-to-br from-pink-900/40 to-gold-900/20" },
];

const locations = ["All Locations", "The Pearl", "West Bay", "Lusail", "Msheireb", "Al Waab"];
const serviceFilters = ["All Services", "GFE", "Massage", "Companionship", "Dinner Dates", "Overnight", "Outcall"];

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [service, setService] = useState("All Services");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = mockProfiles.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchLoc = location === "All Locations" || p.location === location;
    const matchSvc = service === "All Services" || p.services.includes(service);
    return matchSearch && matchLoc && matchSvc;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-2">Explore</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-silver-100 mb-2">
            Browse <span className="text-gold-gradient">Profiles</span>
          </h1>
          <p className="text-silver-500">Discover verified pleasure givers across Doha</p>
        </motion.div>

        {/* Search & Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="liquid-glass rounded-2xl p-4 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-600" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-colors ${
                showFilters ? "bg-gold-500/20 border-gold-500/50 text-gold-300" : "bg-white/[0.04] border-white/10 text-silver-400 hover:border-white/20"
              }`}
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <label className="text-xs text-silver-500 uppercase tracking-widest mb-2 block">Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-silver-200 focus:outline-none focus:border-gold-500/50 text-sm"
                >
                  {locations.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-silver-500 uppercase tracking-widest mb-2 block">Service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-silver-200 focus:outline-none focus:border-gold-500/50 text-sm"
                >
                  {serviceFilters.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results count */}
        <p className="text-silver-600 text-sm mb-6">{filtered.length} profiles found</p>

        {/* Profile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((profile, i) => (
            <GlassCard key={profile.id} className="overflow-hidden" glow delay={i * 0.06}>
              {/* Profile image placeholder */}
              <div className={`${profile.image} h-52 relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-gold-500/40 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-gold-400/60" />
                  </div>
                </div>
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {profile.verified && (
                    <div className="flex items-center gap-1 bg-gold-500/20 backdrop-blur-sm border border-gold-500/40 text-gold-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      <Shield className="w-3 h-3" /> Verified
                    </div>
                  )}
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-silver-400 hover:text-red-400 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Profile info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-silver-100">{profile.name}, {profile.age}</h3>
                    <div className="flex items-center gap-1 text-silver-500 text-xs mt-0.5">
                      <MapPin className="w-3 h-3" /> {profile.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gold-400 font-semibold text-sm">{profile.rate}</p>
                    <div className="flex items-center gap-1 justify-end mt-0.5">
                      <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                      <span className="text-xs text-silver-400">{profile.rating} ({profile.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {profile.services.slice(0, 3).map((s) => (
                    <span key={s} className="text-xs text-silver-500 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

                <button className="w-full glass border-gold-glow text-gold-400 font-medium text-sm py-2.5 rounded-xl hover:bg-gold-500/10 transition-colors">
                  View Profile
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-silver-600">
            <Crown className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="font-display text-xl text-silver-500">No profiles match your filters</p>
            <p className="text-sm mt-2">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
