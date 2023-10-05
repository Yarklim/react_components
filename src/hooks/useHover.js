import { useEffect, useState } from 'react';

const useHover = (ref) => {
  const [isHovering, setIsHovering] = useState(false);

  const on = () => setIsHovering(true);
  const off = () => setIsHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    return function () {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };
  }, [ref]);

  return isHovering;
};

export default useHover;

// Example
/*
const Hover = () => {
	const ref = useRef();

	return (
	<div
        ref={ref}
        style={{
          width: 300,
          height: 300,
          background: isHovering ? 'red' : 'blue',
        }}
      ></div>
	)
}
*/
