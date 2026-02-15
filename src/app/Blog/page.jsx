"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import posts from "@/json/blog/blog-posts.json";
import {
  BlogHero,
  BLogPosts,
  FeatureArticle,
  JoinDevCommunity,
  RecentBlogPost,
} from "@/components/ui/BLog";

export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-200 font-sans">
      {/* Hero Section */}
      <BlogHero />
      {/* Blog Posts Grid */}
      <BLogPosts />
      {/* Featured Article Section */}
      <FeatureArticle />
      {/* Newsletter Section */}
      <JoinDevCommunity />
      {/* Recent Articles Preview */}
      <RecentBlogPost />
    </div>
  );
}
