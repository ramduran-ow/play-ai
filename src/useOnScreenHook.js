import { useMemo, useEffect, useState} from 'react';

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
    
    const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    ), [ref]) // eslint-disable-line
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => observer.disconnect()
    }, []) // eslint-disable-line
  
    return isIntersecting
  }