'use client';

import React from 'react';

const BackgroundBlobs = React.memo(function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none [contain:layout_paint_size]"
    >
      <div
        className="
          absolute top-[-10%] left-[-10%] w-[50%] h-[50%]
          bg-purple-200/40 rounded-full blur-[120px]
          mix-blend-multiply opacity-70
          animate-blob motion-reduce:animate-none
          [will-change:transform]
        "
      />
      <div
        className="
          absolute top-[-10%] right-[-10%] w-[50%] h-[50%]
          bg-pink-200/40 rounded-full blur-[120px]
          mix-blend-multiply opacity-70
          animate-blob animation-delay-2000 motion-reduce:animate-none
          [will-change:transform]
        "
      />
      <div
        className="
          absolute bottom-[-20%] left-[20%] w-[50%] h-[50%]
          bg-blue-200/40 rounded-full blur-[120px]
          mix-blend-multiply opacity-70
          animate-blob animation-delay-4000 motion-reduce:animate-none
          [will-change:transform]
        "
      />
    </div>
  );
});

export default BackgroundBlobs;
