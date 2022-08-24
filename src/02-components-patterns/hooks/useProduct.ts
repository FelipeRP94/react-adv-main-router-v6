import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);

  const isMounted = useRef(false);

  // const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    // if (isControlled.current) {
    //   return onChange!({ count: value, product });
    // }

    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    onChange && onChange({ product, count: newValue });
    setCounter(newValue);
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,
    reset,
  };
};
