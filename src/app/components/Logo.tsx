/** Served from public/logo.png */
export const LOGO_SRC = '/logo.png';
export const LOGO_ALT = 'TWS Transformation With Shaifali';

type LogoImageProps = {
  height?: number;
  className?: string;
};

export function LogoImage({ height = 52, className = '' }: LogoImageProps) {
  return (
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      className={`object-contain shrink-0 ${className}`}
      style={{ height, width: 'auto' }}
      decoding="async"
    />
  );
}

export function LogoMark({ size = 52, className = '' }: { size?: number; className?: string }) {
  return <LogoImage height={size} className={className} />;
}

function BrandName({ compact = false }: { compact?: boolean }) {
  return (
    <div className="min-w-0 leading-tight">
      <div
        className={`font-serif tracking-tight ${compact ? 'text-base' : 'text-lg md:text-xl'}`}
        style={{
          background: 'linear-gradient(to right, #ffffff, #D4AF37)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        TWS
      </div>
      <div
        className={`text-gold/90 ${compact ? 'text-[10px]' : 'text-[10px] sm:text-xs'} leading-snug`}
      >
        Transformation With Shaifali
      </div>
    </div>
  );
}

type BrandLogoProps = {
  compact?: boolean;
  showName?: boolean;
};

export default function BrandLogo({ compact = false, showName = true }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
      <LogoImage
        height={compact ? 44 : 52}
        className={compact ? 'max-h-11' : 'max-h-12 md:max-h-14'}
      />
      {showName && <BrandName compact={compact} />}
    </div>
  );
}
