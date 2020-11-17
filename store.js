import { atom, selector } from "recoil";

const inputValueState = atom({
  key: "inputValueState",
  default: "1",
});

const filterdInputValue = selector({
  key: "filterdInputValue",
  get: ({ get }) => {
    // 通过 get 可以读取其它状态
    const inputValue = get(inputValueState);
    return inputValue.replace(/[0-9]/gi, "");
  },
});

export { inputValueState, filterdInputValue };
