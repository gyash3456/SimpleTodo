import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const useApi = (thunkAsyncFunction, selector) => {
  const dispatch = useDispatch();
  const { status, dynamicData } = useSelector((store) => store[selector]);
  useEffect(() => {
    dispatch(thunkAsyncFunction());
  }, []);
  return { status, dynamicData };
};
