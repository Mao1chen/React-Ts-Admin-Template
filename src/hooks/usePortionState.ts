import { useState } from "react";

/**
 * myc
 * create_time:2023/10/12
 * @param {*初始值} initialValue
 * @returns
 * @describe {* 用于函数式组件复合状态,省略解构赋值}
 */
type inital_type<T = any> = T;
type return_result_type<T = any, K = () => {}> = Array<T | K>;

const usePortionState = <V>(initial: inital_type<V>): return_result_type => {
  const [initialValue, setInitialValue] = useState<inital_type>(initial);
  const setPortionState = (newValue: inital_type) => setInitialValue({ ...initialValue, ...newValue });
  return [initialValue, setPortionState];
};

export default usePortionState;
