import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  Calendar, 
  ArrowRight, 
  User, 
  CheckCircle2, 
  ArrowLeft,
  Share2,
  Bookmark,
  Sparkles
} from 'lucide-react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS, COMPANY_DETAILS } from '../data/mockData';

interface BlogPageProps {
  setCurrentPage: (page: PageId) => void;
  onRequestCallback: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ setCurrentPage, onRequestCallback }) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedPost = BLOG_POSTS.find(p => p.id === selectedPostId);

  return (
    <div className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* If an article is open, show full article view */}
        {selectedPost ? (
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-lg border border-slate-200 space-y-8 animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedPostId(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all heating advice</span>
            </button>

            {/* Article Header */}
            <div className="space-y-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readTime}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPost.date}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <User className="w-4 h-4 text-teal-700" />
                <span>By <strong>{selectedPost.author}</strong></span>
              </div>
            </div>

            {/* Article Key Takeaways Card */}
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-teal-950 text-sm uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <span>Key Engineer Takeaways</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-teal-900">
                {selectedPost.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body Paragraphs */}
            <div className="prose prose-slate max-w-none space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              {selectedPost.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Bottom Author & Share box */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Published by Heatwise Heating Leeds • Gas Safe Register certified
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigateTo('quote')}
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow"
                >
                  Get Instant Boiler Quote
                </button>
                <button
                  onClick={onRequestCallback}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl"
                >
                  Ask An Engineer
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-teal-700" />
                <span>Expert Heating Guides & Tips</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Heating Advice & Leeds Boiler News
              </h1>
              <p className="text-slate-600 text-sm sm:text-base">
                Practical guides written by our Leeds Gas Safe engineers on cutting fuel bills, maintaining warranties, preparing for winter, and choosing the right boiler.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => {
                    setSelectedPostId(post.id);
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{post.date}</span>
                    <span className="text-teal-700 font-bold group-hover:translate-x-1 transition flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter / Advice Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900">Need personal advice on your heating system?</h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Our engineers are always happy to advise on flow temperatures, combi conversions, and radiator cold spots.
                </p>
              </div>
              <button
                onClick={onRequestCallback}
                className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-xs sm:text-sm shrink-0 shadow"
              >
                Request Engineer Callback
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
