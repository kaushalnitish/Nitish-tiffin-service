import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = '/nitish_tiffin_mascot_logo.png',
  ogType = 'website',
  publishedTime,
  author,
  noindex = false,
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (nameAttr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta description
    setMeta('name', 'description', description);

    // 3. Meta robots
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // 4. Canonical URL
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://nitishtiffinservice.com';
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullCanonicalUrl = `${origin}${cleanPath === '/' ? '' : cleanPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 5. OpenGraph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', fullCanonicalUrl);
    setMeta('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${origin}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`);
    setMeta('property', 'og:site_name', 'Nitish Tiffin Service');

    if (ogType === 'article' && publishedTime) {
      setMeta('property', 'article:published_time', publishedTime);
    }
    if (ogType === 'article' && author) {
      setMeta('property', 'article:author', author);
    }

    // 6. Twitter / X Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${origin}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`);

    // 7. Dynamic JSON-LD Schema
    const schemaScriptId = 'dynamic-seo-schema';
    let scriptElement = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = schemaScriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema, null, 2);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, canonicalPath, ogImage, ogType, publishedTime, author, noindex, schema]);

  return null;
};
