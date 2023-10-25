// basic
import {Link} from 'react-router-dom';

// components
import {Box} from '../UI';
import {DarkModeIcon, LightModeIcon} from '../Icons';

// interface
interface IHeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({setIsDarkMode, isDarkMode}: IHeaderProps) => {
  return (
    <Box className="flex justify-between items-center px-7 sm:px-16 py-5 bg-white dark:bg-elems-dark shadow-lg fixed w-full z-30 ">
      <Link
        reloadDocument
        to="/"
        className="font-bold text-xl sm:text-2xl hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-900 p-3 rounded-2xl transition"
      >
        Where in the world?
      </Link>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="flex items-center gap-3 p-3 -mr-3 rounded-2xl hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-900 transition"
      >
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        <p className="text-lg hidden sm:block">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </p>
      </button>
    </Box>
  );
};

export default Header;
