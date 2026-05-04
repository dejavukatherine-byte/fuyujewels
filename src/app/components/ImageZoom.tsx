import { useState } from 'react';

interface ImageZoomProps {
  src?: string;
  alt: string;
  className?: string;
}

export default function ImageZoom({ src, alt, className = '' }: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(false);
  };

  return (
    <>
      {/* Thumbnail Image */}
      <div
        onClick={handleClick}
        className={`cursor-zoom-in ${className}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm sm:text-base">Product Image</span>
          </div>
        )}
        {/* Zoom Icon Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-white rounded-full p-2 sm:p-3">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#143c69]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Zoomed Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-colors z-10"
              aria-label="Close zoom"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Zoomed Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <div className="bg-gray-100 rounded-lg p-12">
                  <span className="text-gray-400 text-lg sm:text-xl">Product Image</span>
                </div>
              )}
            </div>

            {/* Hint Text */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-xs sm:text-sm">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
