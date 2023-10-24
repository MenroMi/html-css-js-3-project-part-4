import {Box} from '../../UI';
import {ErrorSadIcon} from '../../Icons';

interface IRouteNotExistProps {
  info?: string;
}

const RouteNotExist = ({info}: IRouteNotExistProps) => {
  return (
    <Box className="flex flex-col justify-center items-center gap-12 h-screen overflow-hidden mt-32 sm:px-16 w-full ">
      <Box className="flex flex-col items-center gap-5">
        <ErrorSadIcon className="h-64" />
        <h2 className="text-2xl text-neutral-400">
          {info || 'Something went wrong.'}
        </h2>
      </Box>
      <a
        href="/"
        className="cursor-pointer text-center w-full max-w-[50rem] bg-white px-20 py-8 rounded-lgtransition shadow active:shadow-inner"
      >
        Go to main page
      </a>
    </Box>
  );
};

export default RouteNotExist;
