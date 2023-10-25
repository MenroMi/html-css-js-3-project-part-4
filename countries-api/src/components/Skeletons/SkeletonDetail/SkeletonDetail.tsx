// componetns
import Box from '../../UI/Box';

// constants
import {SKELETON_CARDS_SIZE} from '../../../constants';

const SkeletonDetail = () => {
  return (
    <Box className="flex flex-col lg:flex-row justify-between max-h-[40rem] mt-20 gap-12 lg:gap-28 items-center 2xl:items-center w-full">
      <Box className="w-full h-[30rem] lg:h-[30rem] lg:max-w-[50%] self-center animate-pulse bg-slate-100 dark:bg-slate-600 rounded" />

      <Box className=" lg:max-w-[50%] w-full h-full">
        <Box className="bg-slate-100 dark:bg-slate-600 animate-pulse h-10 w-full" />

        <Box className="mt-7 grid sm:grid-cols-2 grid-rows-5">
          {SKELETON_CARDS_SIZE.map((_, i) => (
            <Box
              key={i}
              className="bg-slate-100 w-[60%] sm:w-[90%] dark:bg-slate-600 h-5 mt-2 animate-pulse"
            />
          ))}
        </Box>

        <Box className="mt-5 bg-slate-100 dark:bg-slate-600 animate-pulse h-10 w-[80%]" />
      </Box>
    </Box>
  );
};

export default SkeletonDetail;
