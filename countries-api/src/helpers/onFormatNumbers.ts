const formatter = new Intl.NumberFormat();

// for change population field to more readable numbers
const onFormatNumbers = (val: number) => formatter.format(val);

export default onFormatNumbers;
