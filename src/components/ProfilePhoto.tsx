import React, { useState } from 'react';

// Priority: local public asset -> github raw url
const PRIMARY_PHOTO = '/profile.png';
const GITHUB_FALLBACK =
  'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/1778056184161.png';
const LOCAL_ALT = '/1778056184161.png';

export const ProfilePhoto: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(PRIMARY_PHOTO);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (photoSrc === PRIMARY_PHOTO) {
      setPhotoSrc(LOCAL_ALT);
    } else if (photoSrc === LOCAL_ALT) {
      setPhotoSrc(GITHUB_FALLBACK);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="relative w-full aspect-square bg-[#0a0a0a] border-[3px] border-black shadow-[6px_6px_0px_0px_#000] overflow-hidden group select-none">
      {!hasError ? (
        <img
          src={photoSrc}
          alt="Kunwar Pandey"
          onError={handleImageError}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        // Stylized vector avatar if offline
        <div className="w-full h-full bg-[#1e1e2e] flex flex-col items-center justify-center text-white p-4">
          <div className="w-24 h-24 rounded-full bg-[#facc15] border-4 border-black flex items-center justify-center text-3xl font-black text-black shadow-[4px_4px_0px_0px_#000]">
            KP
          </div>
          <span className="font-mono-neo text-xs font-black uppercase text-stone-300 mt-3">
            Kunwar Pandey
          </span>
        </div>
      )}

      {/* Real-time Status Badge */}
      <div className="absolute top-2.5 left-2.5 bg-black text-white px-2.5 py-1 font-mono-neo text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border-2 border-white/20 shadow-[2px_2px_0px_0px_#000]">
        <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
        <span>Kunwar Pandey</span>
      </div>

      {/* Verified Education Indicator */}
      <div className="absolute bottom-2.5 right-2.5 bg-[#facc15] text-black px-2.5 py-1 font-mono-neo text-[10px] font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000]">
        NIT Silchar '28
      </div>

      {/* Subtle Bottom Aesthetic Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#38bdf8] via-[#facc15] to-[#f43f5e]" />
    </div>
  );
};
