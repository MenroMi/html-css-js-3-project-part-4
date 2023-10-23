// components
import {Box} from '../UI';
import {DarkModeIcon, LightModeIcon} from '../Icons';

const Header = () => {
  const isDark = false; // temporarily

  return (
    <Box className="flex justify-between items-center px-7 sm:px-16 py-5 bg-white shadow-lg fixed w-full z-30 ">
      <h1 className="font-bold text-xl sm:text-2xl">Where in the world?</h1>
      <button className="flex items-center gap-3 p-3 -mr-3 rounded-2xl hover:bg-neutral-100 active:bg-neutral-200 transition">
        {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        <p className="text-lg hidden sm:block">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </p>
      </button>
    </Box>
  );
};

export default Header;
