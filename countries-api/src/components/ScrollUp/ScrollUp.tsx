// components
import PortalToRoot from '../Portal';
import {Box} from '../UI';
import {ArrowTopIcon} from '../Icons';

// interface
interface IScrollUpProps {
  isCanGoUp: boolean;
}

const ScrollUp = ({isCanGoUp}: IScrollUpProps) => {
  const clickHandler = () => {
    document.documentElement.scrollTo({top: 0, left: 0, behavior: 'auto'});
  };

  return (
    <PortalToRoot>
      <Box
        className={`fixed bg-neutral-200 rounded-full right-20 bottom-20 px-5 py-4 cursor-pointer shadow active:shadow-inner transition ${
          isCanGoUp ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={clickHandler}
      >
        <ArrowTopIcon className="fill-slate-400 h-10" />
      </Box>
    </PortalToRoot>
  );
};

export default ScrollUp;
