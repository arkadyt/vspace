import { useState, useEffect } from 'react';

export const useMobileDetector = () => {
  const [ isMobile, setMobile ] = useState(null);

  useEffect(() => {
    const mQ = window.matchMedia("(orientation: portrait)");
    setMobile(mQ.matches);

    const handleChange = e => setMobile(e.matches);
    mQ.addListener(handleChange);
    return () => mQ.removeListener(handleChange);
  }, []);

  return isMobile;
};
