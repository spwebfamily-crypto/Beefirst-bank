import React from 'react';

export const BeeFirstLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/logo_hex.svg"
    alt="BeeFirst"
    className={className}
    {...props}
  />
);