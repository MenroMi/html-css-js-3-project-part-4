import {useCallback, useEffect, useRef, useState} from 'react';

type FuncType = (input: string, ...args: unknown[]) => void | unknown;

const useDebounce = (func: FuncType, timeout: number = 200) => {
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      timerRef.current = setTimeout(func, timeout);
    }

    return () => clearTimeout(timerRef.current!);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const changeHandler = useCallback((e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setSearchInput(target.value);
  }, []);

  const onResetInput = () => setSearchInput('');

  return {searchInput, changeHandler, onResetInput};
};

export default useDebounce;
