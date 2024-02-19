export const throttle = (cb, delay = 1000) => {
  let shouldWait = false;
  let waitingargs = null;

  return (...args) => {
    if (shouldWait) {
      console.log(15, "shouldwait is true");
      waitingargs = args;
      return;
    }
    console.log(21, "callback from main is called");
    cb(args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
      cb(args);
    }, delay);
  };
};
export const throttle1 = (cb, delay = 1000) => {
  let shouldWait = false;
  let waitingargs = null;
  const handleWaitingArgs = () => {
    //code 2
    if (waitingargs == null) {
      shouldWait = false;
    } else {
      cb(waitingargs);
      // console.log("last");
      waitingargs = null; //line 36
      setTimeout(handleWaitingArgs, delay); //line 37
    }
  };
  return (...args) => {
    //code 1
    if (shouldWait) {
      waitingargs = args;
      return;
    }
    cb(args);
    shouldWait = true;
    setTimeout(() => {
      handleWaitingArgs();
    }, delay);
  };
};
//code 1 is triggered everytime our input text changes
//which sets waiting to true after first execution.
//code 2 sets the should wait to false
// now we have put a condition of waiting args to be null
//so if it is null then waiting will be false and our code will execute the callback
//but it is not null till its over
//so we call the callback set waiting args to null and again call the code 2
// we set the waiting to null and again call code 2 so that our shouldwait becomes false otherwise
//waiting will not be null and should wait will always be true.
