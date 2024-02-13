export const throttle = (cb, delay = 1000) => {
  let shouldWait = false;
  let waitingargs = null;
  const handleWaitingArgs = () => {
    if (waitingargs == null) {
      shouldWait = false;
    } else {
      cb(waitingargs);
      waitingargs = null;
      setTimeout(handleWaitingArgs, delay);
    }
  };
  return (...args) => {
    if (shouldWait) {
      waitingargs = args;
      return;
    }
    cb(args);
    shouldWait = true;
    setTimeout(handleWaitingArgs, delay);
  };
};
