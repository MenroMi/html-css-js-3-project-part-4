import Box from '../../UI/Box';

const SkeletonCard = () => {
  return (
    <Box className="flex flex-col bg-white  dark:bg-elems-dark shadow-md rounded-md overflow-hidden">
      <Box className="h-[15rem] w-full bg-slate-100 dark:bg-slate-600 animate-pulse" />

      <Box className="py-8 px-5 mt-auto">
        <Box className="bg-slate-100 dark:bg-slate-600 w-[80%] h-6 animate-pulse rounded-sm" />

        <Box className="mt-5">
          <Box className="bg-slate-100 dark:bg-slate-600 w-[60%] h-4 animate-pulse rounded-sm" />
          <Box className="bg-slate-100 dark:bg-slate-600 w-[60%] h-4 mt-2 animate-pulse rounded-sm" />
          <Box className="bg-slate-100 dark:bg-slate-600 w-[60%] h-4 mt-2 animate-pulse rounded-sm mb-0" />
        </Box>
      </Box>
    </Box>
  );
};

export default SkeletonCard;
