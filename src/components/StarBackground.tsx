import { useState, useEffect } from 'react';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const generateStars = (): Star[] => {
      const stars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        stars.push({
          id: i,
          size: Math.random() * 3 + 1, // Size between 1 and 4
          x: Math.random() * 100, // Percentage
          y: Math.random() * 100, // Percentage
          opacity: Math.random() * 0.8 + 0.2, // Opacity between 0.2 and 1
          animationDuration: Math.random() * 5 + 3, // Duration between 3 and 8 seconds
        });
      }
      return stars;
    };

    const generateMeteors = (): Meteor[] => {
      const meteors: Meteor[] = [];
      for (let i = 0; i < 15; i++) {
        meteors.push({
          id: i,
          size: Math.random() * 3 + 1, // Size between 1 and 4
          x: Math.random() * 20 - 10, // Start slightly off left side
          y: Math.random() * 20 - 10, // Start slightly above viewport
          opacity: Math.random() * 0.5 + 0.3, // Opacity between 0.3 and 0.8
          animationDuration: Math.random() * 4 + 3, // Duration between 3 and 7 seconds
        });
      }
      return meteors;
    };

    setStars(generateStars());
    setMeteors(generateMeteors());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `float ${star.animationDuration}s ease-in-out infinite`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            opacity: meteor.opacity,
            animation: `meteor ${meteor.animationDuration}s linear infinite`,
            transformOrigin: 'center',
          }}
        />
      ))}
    </div>
  );
};
