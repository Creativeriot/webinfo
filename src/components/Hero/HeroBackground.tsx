interface HeroBackgroundProps {
  imageUrl: string;
}

export default function HeroBackground({ imageUrl }: HeroBackgroundProps) {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        filter: 'brightness(0.4)'
      }}
    />
  );
}