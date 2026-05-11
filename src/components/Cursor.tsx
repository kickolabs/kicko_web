import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { useTheme } from '../hooks/useTheme';

export const Cursor = () => {
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 300 });
  const followerX = useSpring(0, { damping: 25, stiffness: 150 });
  const followerY = useSpring(0, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      followerX.set(e.clientX - 20);
      followerY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, followerX, followerY]);

  return (
    <div className="hidden lg:block">
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
        }}
      />
      <motion.div
        className="custom-cursor-follower"
        style={{
          x: followerX,
          y: followerY,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering 
            ? 'rgba(99, 102, 241, 0.8)' 
            : theme === 'dark' 
              ? 'rgba(255, 255, 255, 0.3)' 
              : 'rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
};
