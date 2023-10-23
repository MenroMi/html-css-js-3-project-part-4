// for using fake delay
const onDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default onDelay;
