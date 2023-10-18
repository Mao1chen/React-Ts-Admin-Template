import React from "react";
export default (): { num: Number; setNum: Function } => {
  const [num, setNum] = React.useState<Number>(1);
  return { num, setNum };
};

// 使用：useModel，状态更新所有用到此状态的组件也会跟着更新 import { useModel } from "@umijs/max";
// const {} = useModel("demoModels") 这里很像垮组件通信方案，参考react-redux
