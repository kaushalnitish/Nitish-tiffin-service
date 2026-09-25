/**
 * Article CMS Data Store for Nitish Tiffin Service
 * Supports editorial food stories, local Chamba meal insights, and guides.
 * Backed by localStorage with high-quality seed content.
 */

import tiffinMealPhoto from '../assets/images/homestyle_tiffin_fresh_ingredients_1790281183170.jpg';
import indianKitchenPhoto from '../assets/images/indian_home_kitchen_cooking_1790283021536.jpg';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: "Home Cooking" | "Local Guide" | "Daily Routine" | "Nutrition";
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  readingTime: string;
  isPublished: boolean;
}

/**
 * System Rule: Every public article byline is universally resolved to "Posted by Admin".
 * Personal author names are never exposed in public views, cards, or article pages.
 */
export const PUBLIC_ARTICLE_AUTHOR = "Posted by Admin";
export const getPublicArticleAuthor = (_article?: Article | null): string => "Posted by Admin";

const STORAGE_KEY = "nitish_tiffin_articles_v5";

const INITIAL_ARTICLES: Article[] = [
  {
    id: "art-1",
    slug: "why-simple-home-cooked-food-matters-for-working-days-in-chamba",
    title: "Why Simple Home-Cooked Food Matters for Working Days in Chamba",
    excerpt:
      "Eating out daily at dhabas or restaurants in Chamba quickly gets heavy on digestion and the wallet. Here is why simple, light ghar ka khana sustains energy throughout a long workday.",
    content: `
Living or working in Chamba town—whether near the DC Office on Court Road, around the busy Chowgan bazaar, or in local schools and bank branches—comes with a very real daily question: what should I eat for lunch?

When people move to Chamba for government postings, teaching jobs, or local business, they often start by eating at nearby eateries and market dhabas. But after a week or two of oily curries, heavy masalas, and deep-fried snacks, the body begins to feel the fatigue. Heavy restaurant food leads to post-lunch sluggishness, heartburn, and digestive heaviness that makes afternoon work uncomfortable.

### The Honest Value of "Ghar Jaisa Khana"

What our bodies truly need on an everyday basis is not fancy restaurant cuisine. We need food that feels like what our mother or family cooks at home:
- Soft, freshly made whole wheat phulka rotis without excess butter or soda.
- Simple yellow dal or seasonal lentil tadka cooked with cumin, hing, and mild turmeric.
- Fresh seasonal sabzi made with minimal oil, letting the natural vegetable flavor shine.
- Plain steamed basmati rice and a fresh crunch of salad.

This kind of everyday food nourishes you without weighing you down. You finish lunch, feel satisfied, and can return to your desk or shop with clear energy.

### Fresh Produce Sourced Locally in Chamba

In Himachal Pradesh, seasonality plays a huge role in what tastes best. In winter, fresh local greens (saag), cauliflower, carrots, and radishes taste sweet and tender. In summer and monsoon, tender gourds, beans, and fresh hill cucumbers take center stage. 

At Nitish Tiffin Service, we prepare meals each morning using vegetables purchased fresh from the local Chamba market. We cook the exact same food that our own family sits down to eat. 

### Predictable Timings Make All the Difference

Another struggle for working professionals in Chamba is erratic lunch hours. When you order from commercial restaurants, food might arrive early or be delayed by 45 minutes. With a dedicated local tiffin service delivering fresh warm meals around 1:00 PM every single day, you can plan your day with peace of mind.

If you are currently staying in Chamba and looking for a regular lunch or dinner that feels genuinely like home, trying a single trial meal is always the simplest way to decide.
    `.trim(),
    featuredImage: indianKitchenPhoto,
    author: "Nitish Kaushal",
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-24",
    category: "Home Cooking",
    tags: ["Home Cooked Food", "Chamba", "Working Professionals", "Health"],
    seoTitle: "Why Simple Home-Cooked Food Matters for Working Days in Chamba",
    seoDescription:
      "Discover why simple ghar ka khana in Chamba beats everyday oily restaurant food for health, steady energy, and long workdays.",
    canonicalUrl: "https://nitishtiffinservice.com/articles/why-simple-home-cooked-food-matters-for-working-days-in-chamba",
    readingTime: "4 min read",
    isPublished: true,
  },
];

export function getArticles(): Article[] {
  if (typeof window === "undefined") return INITIAL_ARTICLES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ARTICLES));
      return INITIAL_ARTICLES;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ARTICLES));
      return INITIAL_ARTICLES;
    }
    return parsed;
  } catch {
    return INITIAL_ARTICLES;
  }
}

export function getPublishedArticles(): Article[] {
  return getArticles().filter((a) => a.isPublished);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find(
    (a) => a.slug === slug || (slug === "why-home-cooked-food-matters-in-chamba" && a.id === "art-1")
  );
}

export function saveArticle(article: Article): void {
  const current = getArticles();
  const existingIdx = current.findIndex((a) => a.id === article.id || a.slug === article.slug);
  let updated: Article[];
  if (existingIdx >= 0) {
    updated = [...current];
    updated[existingIdx] = {
      ...article,
      updatedAt: new Date().toISOString().split("T")[0],
    };
  } else {
    updated = [article, ...current];
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function deleteArticle(id: string): void {
  const current = getArticles();
  const filtered = current.filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function resetArticlesToDefault(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ARTICLES));
}
