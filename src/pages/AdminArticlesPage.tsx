import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  ArrowLeft,
  Eye,
  Save,
  CheckSquare,
  Square,
  ShieldCheck,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import {
  getArticles,
  saveArticle,
  deleteArticle,
  resetArticlesToDefault,
  Article,
} from '../data/articles';

export const AdminArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [activeTab, setActiveTab] = useState<'editor' | 'checklist' | 'aiAssistant'>('editor');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [checklistState, setChecklistState] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
  });

  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  const handleCreateNew = () => {
    const newArt: Article = {
      id: `art-${Date.now()}`,
      slug: `new-guide-${Date.now().toString().slice(-4)}`,
      title: 'New Guide: Everyday Home Food in Chamba',
      excerpt: 'Short description of this guide for readers in Chamba.',
      content: `### Why Simple Home Cooking Works Best\n\nWrite your genuine thoughts, kitchen observations, or local Chamba food advice here.\n\n### Fresh Local Ingredients\n\nExplain how fresh produce from the local Chamba market makes a difference.`,
      featuredImage: '/nitish_tiffin_mascot_logo.png',
      author: 'Admin',
      publishedAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      category: 'Home Cooking',
      tags: ['Chamba', 'Home Food'],
      seoTitle: '',
      seoDescription: '',
      canonicalUrl: '',
      readingTime: '3 min read',
      isPublished: false, // Default to draft for quality review
    };
    setEditingArticle(newArt);
    setActiveTab('editor');
  };

  const handleSave = () => {
    if (!editingArticle) return;

    // Quality check rule #10
    if (!checklistState[10] && editingArticle.isPublished) {
      const confirmPublish = window.confirm(
        'Warning: Item #10 ("Is this article genuinely useful even if Google traffic were zero?") is unchecked. Are you sure you want to publish without this guarantee?'
      );
      if (!confirmPublish) return;
    }

    saveArticle(editingArticle);
    setArticles(getArticles());
    setSuccessMsg('Article saved successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle(id);
      setArticles(getArticles());
      if (editingArticle?.id === id) {
        setEditingArticle(null);
      }
    }
  };

  const checklistItems = [
    { id: 1, text: 'Does this article provide actual value to the reader?' },
    { id: 2, text: 'Is the business information accurate and realistic?' },
    { id: 3, text: 'Is it relevant to residents, students, or staff in Chamba?' },
    { id: 4, text: 'Does it contain original / local insight from our kitchen?' },
    { id: 5, text: 'Is the writing natural and human (not robotic or keyword-stuffed)?' },
    { id: 6, text: 'Is the title descriptive and honest?' },
    { id: 7, text: 'Are there zero unnecessary repetitive keywords?' },
    { id: 8, text: 'Are claims supported by actual business knowledge?' },
    { id: 9, text: 'Is the featured image relevant?' },
    {
      id: 10,
      text: 'CRITICAL: Is the article genuinely useful even if Google traffic were zero?',
      critical: true,
    },
  ];

  // AI Editorial Assistant (suggestions, outline, grammar, structure)
  const handleGenerateOutline = () => {
    setIsAiLoading(true);
    setTimeout(() => {
      setAiSuggestions([
        'Outline Suggestion: 1. Introduction to daily routine in Chamba 2. Difference between restaurant curries and home dal-roti 3. How insulated tiffin keeps food warm 4. How to start with a ₹70 trial meal.',
        'Clarity Tip: Mention specific local landmarks (e.g. Chowgan bazaar, Court road) naturally so readers know you are physically operating in Chamba.',
        'Quality Guardrail: Avoid repeating the phrase "best tiffin service". Let the honest description of fresh vegetables and cooking care build trust.',
      ]);
      setIsAiLoading(false);
    }, 600);
  };

  return (
    <>
      <SEOHead
        title="Article Editorial Management | Nitish Tiffin Service"
        description="Internal article manager and editorial quality checklist for Nitish Tiffin Service."
        noindex={true}
      />

      <main className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#EAE7DC]">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
                Protected Admin / Editorial Hub
              </span>
              <span className="text-xs text-[#7A8B7E]">Not Indexable by Search Engines</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#183824] mt-1">
              Food Journal Content Management
            </h1>
            <p className="text-xs sm:text-sm text-[#55695B]">
              Draft with care → Review with Quality Checklist → Publish genuine Chamba guides.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/articles"
              className="px-4 py-2 rounded-full border border-[#D5D0C2] bg-white text-xs font-semibold text-[#183824] hover:bg-[#FAF9F5] flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Public Journal</span>
            </Link>

            <button
              onClick={handleCreateNew}
              className="px-4 py-2 rounded-full bg-[#183824] text-white text-xs font-semibold hover:bg-[#11291A] flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Write New Guide</span>
            </button>
          </div>
        </div>

        {successMsg && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-xl flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{successMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Articles List (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-[#E3DFD2] rounded-3xl p-4 sm:p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE1]">
              <span className="text-xs font-bold text-[#183824] uppercase tracking-wider">
                Articles ({articles.length})
              </span>
              <button
                onClick={() => {
                  if (window.confirm('Reset all articles to original default guides?')) {
                    resetArticlesToDefault();
                    setArticles(getArticles());
                  }
                }}
                className="text-[11px] text-[#7A8B7E] hover:text-[#183824] cursor-pointer"
              >
                Reset Defaults
              </button>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {articles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setEditingArticle(art)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    editingArticle?.id === art.id
                      ? 'border-[#183824] bg-[#F7F6F1]'
                      : 'border-[#EAE7DD] hover:border-[#183824]/40 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-[#728275] mb-1">
                      <span className="font-semibold">{art.category}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          art.isPublished
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {art.isPublished ? 'Published' : 'Draft (Noindex)'}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[#183824] line-clamp-2 leading-snug">
                      {art.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F2EFE8] text-[11px] text-[#829285]">
                    <span>{art.publishedAt}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(art.id);
                      }}
                      className="text-red-600 hover:text-red-800 p-1"
                      title="Delete article"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editor & Quality Checklist (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-[#E3DFD2] rounded-3xl p-6 sm:p-8 shadow-2xs">
            {editingArticle ? (
              <div>
                {/* Tabs */}
                <div className="flex items-center gap-2 border-b border-[#F0ECE1] pb-3 mb-6">
                  <button
                    onClick={() => setActiveTab('editor')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                      activeTab === 'editor'
                        ? 'bg-[#183824] text-white'
                        : 'text-[#55695B] hover:bg-[#F5F4EE]'
                    }`}
                  >
                    Article Editor
                  </button>
                  <button
                    onClick={() => setActiveTab('checklist')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                      activeTab === 'checklist'
                        ? 'bg-[#183824] text-white'
                        : 'text-[#55695B] hover:bg-[#F5F4EE]'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Quality Checklist</span>
                    {!checklistState[10] && (
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('aiAssistant')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                      activeTab === 'aiAssistant'
                        ? 'bg-[#183824] text-white'
                        : 'text-[#55695B] hover:bg-[#F5F4EE]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Editorial Assistant</span>
                  </button>
                </div>

                {activeTab === 'editor' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* Title */}
                    <div>
                      <label className="block font-bold text-[#183824] mb-1">Article Title</label>
                      <input
                        type="text"
                        value={editingArticle.title}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, title: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#E3DFD2] rounded-xl focus:outline-hidden focus:border-[#183824]"
                      />
                    </div>

                    {/* Slug & Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-[#183824] mb-1">
                          URL Slug (/articles/...)
                        </label>
                        <input
                          type="text"
                          value={editingArticle.slug}
                          onChange={(e) =>
                            setEditingArticle({ ...editingArticle, slug: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-[#E3DFD2] rounded-xl focus:outline-hidden focus:border-[#183824]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-[#183824] mb-1">Category</label>
                        <select
                          value={editingArticle.category}
                          onChange={(e) =>
                            setEditingArticle({
                              ...editingArticle,
                              category: e.target.value as Article['category'],
                            })
                          }
                          className="w-full px-3 py-2 border border-[#E3DFD2] rounded-xl focus:outline-hidden focus:border-[#183824]"
                        >
                          <option value="Home Cooking">Home Cooking</option>
                          <option value="Local Guide">Local Guide</option>
                          <option value="Daily Routine">Daily Routine</option>
                          <option value="Nutrition">Nutrition</option>
                        </select>
                      </div>
                    </div>

                    {/* Attribution System Rule Note */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#FAF9F5] border border-[#E3DFD2] rounded-xl text-xs text-[#526356]">
                      <span className="font-semibold text-[#183824]">Public Attribution:</span>
                      <span>Automatically displayed as <strong>Posted by Admin</strong> on all public views & guides.</span>
                    </div>

                    {/* Excerpt */}
                    <div>
                      <label className="block font-bold text-[#183824] mb-1">
                        Short Excerpt (Summary)
                      </label>
                      <textarea
                        rows={2}
                        value={editingArticle.excerpt}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, excerpt: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#E3DFD2] rounded-xl focus:outline-hidden focus:border-[#183824]"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <label className="block font-bold text-[#183824] mb-1">
                        Article Body Content (Markdown supported)
                      </label>
                      <textarea
                        rows={10}
                        value={editingArticle.content}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, content: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#E3DFD2] rounded-xl font-mono text-xs focus:outline-hidden focus:border-[#183824]"
                      />
                    </div>

                    {/* SEO Metadata Fields */}
                    <div className="p-4 bg-[#FAF9F5] border border-[#EAE7DD] rounded-2xl space-y-3">
                      <span className="text-xs font-bold text-[#183824] uppercase tracking-wide block">
                        Search Engine Metadata (SEO)
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-[#46554A] mb-1">
                            Custom SEO Title (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder={editingArticle.title}
                            value={editingArticle.seoTitle}
                            onChange={(e) =>
                              setEditingArticle({ ...editingArticle, seoTitle: e.target.value })
                            }
                            className="w-full px-3 py-1.5 text-xs border border-[#E3DFD2] bg-white rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-[#46554A] mb-1">
                            Reading Time
                          </label>
                          <input
                            type="text"
                            value={editingArticle.readingTime}
                            onChange={(e) =>
                              setEditingArticle({
                                ...editingArticle,
                                readingTime: e.target.value,
                              })
                            }
                            className="w-full px-3 py-1.5 text-xs border border-[#E3DFD2] bg-white rounded-lg"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#46554A] mb-1">
                          Custom SEO Description (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder={editingArticle.excerpt}
                          value={editingArticle.seoDescription}
                          onChange={(e) =>
                            setEditingArticle({
                              ...editingArticle,
                              seoDescription: e.target.value,
                            })
                          }
                          className="w-full px-3 py-1.5 text-xs border border-[#E3DFD2] bg-white rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Status Toggle & Save Bar */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F0ECE1]">
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#183824]">
                          <input
                            type="checkbox"
                            checked={editingArticle.isPublished}
                            onChange={(e) =>
                              setEditingArticle({
                                ...editingArticle,
                                isPublished: e.target.checked,
                              })
                            }
                            className="rounded-sm text-[#183824]"
                          />
                          <span>
                            {editingArticle.isPublished
                              ? 'Status: Published (Indexable)'
                              : 'Status: Draft (Hidden from Search Engines)'}
                          </span>
                        </label>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        {editingArticle.isPublished && (
                          <Link
                            to={`/articles/${editingArticle.slug}`}
                            target="_blank"
                            className="px-4 py-2 rounded-full border border-[#D5D0C2] text-xs font-semibold text-[#183824] hover:bg-[#FAF9F5]"
                          >
                            Live Preview
                          </Link>
                        )}

                        <button
                          onClick={handleSave}
                          className="px-6 py-2 rounded-full bg-[#183824] text-white text-xs font-bold hover:bg-[#11291A] flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save Changes</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'checklist' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-[#F7F6F1] rounded-2xl border border-[#E7E3D5] text-xs text-[#4F5F53] leading-relaxed">
                      <strong>Editorial Quality Standard:</strong> Before publishing any guide on Nitish Tiffin Service, verify all 10 quality checks. This ensures our food journal remains a trusted, high-value local resource rather than mass-produced AI spam.
                    </div>

                    <div className="space-y-2.5">
                      {checklistItems.map((item) => (
                        <div
                          key={item.id}
                          onClick={() =>
                            setChecklistState({
                              ...checklistState,
                              [item.id]: !checklistState[item.id],
                            })
                          }
                          className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                            checklistState[item.id]
                              ? 'bg-emerald-50/50 border-emerald-200'
                              : item.critical
                              ? 'bg-red-50/70 border-red-200'
                              : 'bg-white border-[#E3DFD2]'
                          }`}
                        >
                          <div className="mt-0.5">
                            {checklistState[item.id] ? (
                              <CheckSquare className="w-4 h-4 text-emerald-700" />
                            ) : (
                              <Square className="w-4 h-4 text-[#8C9C8F]" />
                            )}
                          </div>
                          <div>
                            <span
                              className={`text-xs sm:text-sm font-medium ${
                                item.critical ? 'font-bold text-[#183824]' : 'text-[#3D4D41]'
                              }`}
                            >
                              {item.id}. {item.text}
                            </span>
                            {item.critical && !checklistState[item.id] && (
                              <p className="text-xs text-red-600 font-semibold mt-1">
                                Warning: Articles must not be published solely for search engines without offering genuine human utility!
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'aiAssistant' && (
                  <div className="space-y-5 text-xs sm:text-sm">
                    <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-amber-900 leading-relaxed text-xs">
                      <strong>AI Safety & Quality Policy:</strong> Nitish Tiffin Service uses AI strictly as an editorial assistant (for structure, title ideas, and grammar refinement). It never mass-publishes automated articles.
                    </div>

                    <div>
                      <button
                        onClick={handleGenerateOutline}
                        disabled={isAiLoading}
                        className="px-4 py-2 rounded-full bg-[#183824] text-white text-xs font-semibold hover:bg-[#11291A] flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{isAiLoading ? 'Analyzing...' : 'Generate Editorial Insights & Outline'}</span>
                      </button>
                    </div>

                    {aiSuggestions.length > 0 && (
                      <div className="space-y-3">
                        <span className="text-xs font-bold text-[#183824] uppercase tracking-wide block">
                          Editorial Suggestions for this Article:
                        </span>
                        {aiSuggestions.map((sug, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-white border border-[#E3DFD2] text-[#47574B] text-xs leading-relaxed"
                          >
                            {sug}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-16">
                <FileText className="w-10 h-10 text-[#98A89C] mx-auto mb-2" />
                <h3 className="text-base font-bold text-[#183824]">Select or Create an Article</h3>
                <p className="text-xs text-[#6B7D70] mt-1 max-w-sm mx-auto">
                  Choose an existing article from the left column to edit, or click 'Write New Guide' to start a new draft.
                </p>
                <button
                  onClick={handleCreateNew}
                  className="mt-4 px-4 py-2 rounded-full bg-[#183824] text-white text-xs font-semibold"
                >
                  Write New Guide
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
