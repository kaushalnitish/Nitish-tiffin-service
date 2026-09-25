/**
 * Production-Grade Optimized Responsive Image Sources
 * Provides AVIF, WebP, responsive srcSets, LQIP blurred previews, and aspect ratios.
 */

export interface OptimizedImageSource {
  avifSrcSet: string;
  webpSrcSet: string;
  fallbackSrcSet: string;
  fallbackSrc: string;
  lqip: string;
  width: number;
  height: number;
  aspectRatio: string;
}

export const HERO_MASCOT_IMAGE: OptimizedImageSource = {
  avifSrcSet:
    '/images/mascot/mascot-320.avif 320w, /images/mascot/mascot-480.avif 480w, /images/mascot/mascot-640.avif 640w, /images/mascot/mascot-960.avif 960w, /images/mascot/mascot-1024.avif 1024w',
  webpSrcSet:
    '/images/mascot/mascot-320.webp 320w, /images/mascot/mascot-480.webp 480w, /images/mascot/mascot-640.webp 640w, /images/mascot/mascot-960.webp 960w, /images/mascot/mascot-1024.webp 1024w',
  fallbackSrcSet:
    '/images/mascot/mascot-320.png 320w, /images/mascot/mascot-480.png 480w, /images/mascot/mascot-640.png 640w, /images/mascot/mascot-960.png 960w, /images/mascot/mascot-1024.png 1024w',
  fallbackSrc: '/images/mascot/mascot-480.png',
  lqip:
    'data:image/webp;base64,UklGRiABAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSIcAAAABgGNb2/HqiW2z9DSczmndZWU0yQB41RvVnYRt2/iNIUTEBEBkQyJl56PLz799rhX1HN7BB0EQxOckwGKYEJxzJkbtm+unDUC9QPDcsALBfT6XESB0wec6Bng2+ez6AfmYz5wCQPKB6zkHAMpZrkUtA7nV43+C+D9dr4JVqol2ev1uXCNlEwgAVlA4IHIAAADwAQCdASoQABAABABoJbACdADjKEw0ZAAAzEvOx6I/2Zc9bmAxOO2AxlN0XEiGvFGcJ4kFn+BZOroAwusuqC8xeBY4KSQTOq7zGCE5jg72C6tM9HYyo+MfRIGpvFdoMgPjIj/6RwUm2E1/LggUsIWJAAA=',
  width: 1024,
  height: 1024,
  aspectRatio: '1 / 1',
};

export const TIFFIN_MEAL_IMAGE: OptimizedImageSource = {
  avifSrcSet:
    '/images/tiffin-meal/tiffin-meal-360.avif 360w, /images/tiffin-meal/tiffin-meal-540.avif 540w, /images/tiffin-meal/tiffin-meal-720.avif 720w, /images/tiffin-meal/tiffin-meal-960.avif 960w, /images/tiffin-meal/tiffin-meal-1200.avif 1200w',
  webpSrcSet:
    '/images/tiffin-meal/tiffin-meal-360.webp 360w, /images/tiffin-meal/tiffin-meal-540.webp 540w, /images/tiffin-meal/tiffin-meal-720.webp 720w, /images/tiffin-meal/tiffin-meal-960.webp 960w, /images/tiffin-meal/tiffin-meal-1200.webp 1200w',
  fallbackSrcSet:
    '/images/tiffin-meal/tiffin-meal-360.jpg 360w, /images/tiffin-meal/tiffin-meal-540.jpg 540w, /images/tiffin-meal/tiffin-meal-720.jpg 720w, /images/tiffin-meal/tiffin-meal-960.jpg 960w, /images/tiffin-meal/tiffin-meal-1200.jpg 1200w',
  fallbackSrc: '/images/tiffin-meal/tiffin-meal-720.jpg',
  lqip:
    'data:image/webp;base64,UklGRqYAAABXRUJQVlA4IJoAAAAwBACdASoUAA8APxFysFAsJqSisAgBgCIJYgCw7Yy85q8CdlQVb3f3qHgA/uC/koxDgUnyntzitTi1Rnk5sENecsaJ125+J2Zu9k0FBAGeJz6h7IFSPbDQ9BNphc8kR5YWKeBfWEbx0ciu9gee9zimxe9K0QMSV4FjhjQfi1mye3QP0DbW6m6jLqZhKdwclA9WsRuSoOxlAAAA',
  width: 1200,
  height: 896,
  aspectRatio: '1200 / 896',
};

export const KITCHEN_COOKING_IMAGE: OptimizedImageSource = {
  avifSrcSet:
    '/images/kitchen/kitchen-360.avif 360w, /images/kitchen/kitchen-540.avif 540w, /images/kitchen/kitchen-720.avif 720w, /images/kitchen/kitchen-960.avif 960w, /images/kitchen/kitchen-1200.avif 1200w',
  webpSrcSet:
    '/images/kitchen/kitchen-360.webp 360w, /images/kitchen/kitchen-540.webp 540w, /images/kitchen/kitchen-720.webp 720w, /images/kitchen/kitchen-960.webp 960w, /images/kitchen/kitchen-1200.webp 1200w',
  fallbackSrcSet:
    '/images/kitchen/kitchen-360.jpg 360w, /images/kitchen/kitchen-540.jpg 540w, /images/kitchen/kitchen-720.jpg 720w, /images/kitchen/kitchen-960.jpg 960w, /images/kitchen/kitchen-1200.jpg 1200w',
  fallbackSrc: '/images/kitchen/kitchen-720.jpg',
  lqip:
    'data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAAAQBACdASoUAA8APxFysFAsJqSisAgBgCIJQBOgMY2Q27ZWFpWDYCiCIAD+xsV11vijMEL8W64NcQyxx5z8hAYBET2jbHfdDIaG7fWi2M8PYv11XCFOhQqa9Z/wex/6l67XiwhPHXMsRYm0ucLJZ9RcQX/HaLM8g2/WOAolF0ubt72oKs3nbgAA',
  width: 1200,
  height: 896,
  aspectRatio: '1200 / 896',
};

export function getOptimizedImage(src: string | OptimizedImageSource): OptimizedImageSource {
  if (typeof src !== 'string') return src;
  if (src.includes('kitchen') || src.includes('1790283021536')) {
    return KITCHEN_COOKING_IMAGE;
  }
  if (src.includes('tiffin') || src.includes('1790281183170') || src.includes('todaysMeal')) {
    return TIFFIN_MEAL_IMAGE;
  }
  if (src.includes('mascot')) {
    return HERO_MASCOT_IMAGE;
  }
  return KITCHEN_COOKING_IMAGE;
}
