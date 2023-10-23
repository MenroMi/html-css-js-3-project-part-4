const formatter = new Intl.NumberFormat();

const onFormatNumbers = (val: number) => formatter.format(val);

export default onFormatNumbers;
