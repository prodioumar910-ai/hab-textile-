import { useState } from 'react';
import { motion } from 'motion/react';

interface FluidImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function FluidImage({ src, alt, className = '', ...props }: FluidImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getOptimizedUrl = (url: string) => {
    if (!url.includes('unsplash.com')) return url;
    
    // Remove existing quality and format params to avoid duplication
    let newUrl = url
      .replace(/&q=\d+/g, '')
      .replace(/\?q=\d+&/g, '?')
      .replace(/&fm=[^&]+/g, '')
      .replace(/\?fm=[^&]+&/g, '?')
      .replace(/&auto=[^&]+/g, '')
      .replace(/\?auto=[^&]+&/g, '?');
      
    // Default to a 60% quality WebP image
    const separator = newUrl.includes('?') ? '&' : '?';
    return `${newUrl}${separator}q=60&fm=webp&auto=format`;
  };

  return (
    <div className={`relative overflow-hidden bg-earth-light/20 ${className}`}>
      {/* Blurred Placeholder Skeleton */}
      <motion.div 
        className="absolute inset-0 bg-earth-light backdrop-blur-md"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      />
      <img
        src={getOptimizedUrl(src)}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'} ${className}`}
        loading="lazy"
        {...props}
      />
    </div>
  );
}
