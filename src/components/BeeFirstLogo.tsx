import React from 'react';

interface BeeFirstLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'hex' | 'full';
}

export const BeeFirstLogo: React.FC<BeeFirstLogoProps> = ({ variant = 'hex', className, ...props }) => (
  <img
    src={variant === 'full' ? '/logototal.svg' : '/logo_hex.svg'}
    alt="BeeFirst"
    className={className}
    {...props}
  />
);