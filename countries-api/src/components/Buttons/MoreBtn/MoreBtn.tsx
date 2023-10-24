// components
import {Button} from '../../UI';
import {LoaderIcon} from '../../Icons';

// type
import type {FC} from 'react';

// interface
interface IMoreBtnProps {
  isFetched: boolean;
  isError: boolean;
  isLoading: boolean;
  moreBtnClickHandler: () => void;
}

const MoreBtn: FC<IMoreBtnProps> = ({
  isFetched,
  isError,
  isLoading,
  moreBtnClickHandler,
}) => {
  return (
    <Button
      disabled={!isFetched}
      onClick={moreBtnClickHandler}
      className="flex gap-2 justify-center items-center text-xl bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 transition py-3 px-4 rounded-md w-full max-w-[15rem] text-slate-400 justify-self-center border-2 disabled:opacity-50 self-center"
    >
      MORE
      {!isError && !isFetched && isLoading && <LoaderIcon />}
    </Button>
  );
};

export default MoreBtn;
