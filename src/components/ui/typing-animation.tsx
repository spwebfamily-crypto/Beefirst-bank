"use client";

import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  duration = 50,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          setI(i + 1);
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 3000); // Wait 3 seconds
        }
      } else {
        if (i > 0) {
          setDisplayedText(text.substring(0, i - 1));
          setI(i - 1);
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    };

    // Typing speed is normal, deleting speed is faster
    const typingSpeed = isDeleting ? duration / 2 : duration;
    
    // If we are pausing (waiting to delete), we handled it via setTimeout in the if block, 
    // but the effect dependency on `i` and `isDeleting` might trigger re-renders. 
    // To keep it simple, we use a timeout for the next character action.
    
    // However, the logic above sets a timeout inside the tick which might be tricky with useEffect cleanups if not careful.
    // Let's control the tick only when we need to type/delete.
    
    if (i === text.length && !isDeleting) {
        // We are at the end, waiting to delete. The setTimeout in the logic above handles the state switch.
        // We do nothing here until state changes.
        const timer = setTimeout(() => setIsDeleting(true), 3000);
        return () => clearTimeout(timer);
    } 
    
    if (i === 0 && isDeleting) {
        // We are at the start, switch to typing immediately or after small pause
         const timer = setTimeout(() => setIsDeleting(false), 500);
         return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
        if (!isDeleting) {
            setDisplayedText(text.substring(0, i + 1));
            setI(i + 1);
        } else {
            setDisplayedText(text.substring(0, i - 1));
            setI(i - 1);
        }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, duration, isDeleting, i]);

  return (
    <div
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm min-h-[3rem]",
        className,
      )}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}