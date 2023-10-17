import { useRef, useEffect } from 'react';

const useInfiniteScroll = (parentRef, childRef, callback) => {
  const observer = useRef();

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        callback();
      }
    }, options);

    observer.current.observe(childRef.current);

    return () => {
      observer.current.unobserve(childRef.current);
    };
  }, [callback, childRef, parentRef]);
};

export default useInfiniteScroll;
