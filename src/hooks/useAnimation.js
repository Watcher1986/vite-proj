import { useSpring } from 'react-spring';

const useAnimation = () => {
  const animProps = useSpring({
    from: {
      opacity: 0,
      transform: 'translate(-1000px, 0px)',
    },
    to: { opacity: 1, transform: 'translate(0px,0px)' },
  });
  return animProps;
};

export default useAnimation;
