import { useRecoilState } from "recoil";
import { inputValueState } from "../store";
import { Input } from "antd";
const Test = () => {
  const [value, setValue] = useRecoilState(inputValueState);
  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default Test;
