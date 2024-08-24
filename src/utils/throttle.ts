export const throttle = <T>(cb: (arg: T) => void, delay: number) => {
  let throttling = false;

  return (arg: T) => {
    if (!throttling) {
      throttling = true;

      cb(arg);

      setTimeout(() => {
        throttling = false;
      }, delay);
    }
  };
};
