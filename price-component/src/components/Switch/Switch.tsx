interface ISwitchProps {
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch = ({isMonthly, setIsMonthly}: ISwitchProps) => {
  return (
    <label className="relative inline-block w-16 h-9">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        onChange={() => setIsMonthly(!isMonthly)}
      />
      <span
        className={`rounded-4xl absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-light-blue from-20% to-90% to-dark-blue transition before:absolute before:h-7 before:w-7 before:left-1 before:bottom-1 before:bg-white before:rounded-4xl before:transition ${
          isMonthly ? 'before:translate-x-7' : ''
        }`}
      ></span>
    </label>
  );
};

export default Switch;
