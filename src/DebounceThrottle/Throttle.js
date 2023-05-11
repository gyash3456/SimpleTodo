const throttle=(cb,delay=1000)=>{
    let shouldWait=false;
    let waitingArg=null;
    const timeoutfunc=()=>setTimeout(()=>{
        if(waitingArg==null){
            shouldWait=false;
        }
        else{
            cb(waitingArg);
            waitingArg=null;//for next case to stop if there is no more arg
            setTimeout(timeoutfunc,delay);//extra call for ensuring

        }
            
        },delay)

    return(...args)=>{
        if(shouldWait){
            waitingArg=args;
            return
        }
        
        cb(args);
        shouldWait=true;
        setTimeout(timeoutfunc,delay);
        
    }
}