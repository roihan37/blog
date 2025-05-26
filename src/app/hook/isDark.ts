import { useState, useEffect} from "react";

export function useDarkMode(): boolean {
    const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      const checkDarkMode = () => {
        setIsDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      };
  
      checkDarkMode();
      
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', checkDarkMode);
  
      return () => {
        mediaQuery.removeEventListener('change', checkDarkMode);
      };
      
    }, []);
  
    return isDark;
  }
  