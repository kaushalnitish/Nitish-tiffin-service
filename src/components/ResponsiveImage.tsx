import React, { useState } from 'react';
import { OptimizedImageSource } from '../config/images';

export interface ResponsiveImageProps {
  image: OptimizedImageSource;
  alt: string;
  sizes: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'sync' | 'auto';
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  onLoad?: () => void;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  image,
  alt,
  sizes,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  referrerPolicy = 'no-referrer',
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      style={{
        backgroundImage: image.lqip ? `url("${image.lqip}")` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <picture className="w-full h-full block">
        {/* Preferred modern AVIF format */}
        <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />
        {/* Universal modern WebP format */}
        <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
        {/* Crisp Fallback image with explicit dimensions for zero layout shift */}
        <img
          src={image.fallbackSrc}
          srcSet={image.fallbackSrcSet}
          sizes={sizes}
          width={image.width}
          height={image.height}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
          referrerPolicy={referrerPolicy}
          onLoad={handleLoad}
          className={`transition-opacity duration-300 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      </picture>
    </div>
  );
};
