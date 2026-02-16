"use client";

import {
  BlogHero,
  BLogPosts,
  FeatureArticle,
  JoinDevCommunity,
  RecentBlogPost,
} from "@/components/ui/BLog";

export default function App() {

  return (
    <div className="min-h-screen ">
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
