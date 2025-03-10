import { Dispatch, SetStateAction, useState } from "react";
import { DynamicButton, InputStyles, SwapStyles } from "../../Styles/Swap";
import { ArrowIcon } from "./Arrow";
import Chart from "../Charts/Chart"; // Import Chart

interface IInputComp {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  txType: "Buy" | "Sell";
}

// rounds to 2d.p
export const getRoundedMultiple = (num1: number, num2: number) => {
  return Math.round(num1 * num2 * 100) / 100;
};

export const InputComp: React.FC<IInputComp> = ({ value, setValue, txType }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputStyles>
      <span>{txType}</span>
      <div className="inp">
        <input
          type="number"
          name="sell currency"
          placeholder="0"
          value={value}
          onChange={handleChange}
        />
        <div className="dropdown">Dropdown</div>
      </div>
      <div className="val">
        {value == "" ? "" : `${"$" + getRoundedMultiple(0.00005, Number(value))}`}
      </div>
    </InputStyles>
  );
};

export const Swap = () => {
  const [token1, setToken1] = useState("ethereum"); // Default token set to Ethereum
  const [token2, setToken2] = useState("");

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleSwapValues = () => {
    const prevValue1 = value1;
    const prevToken1 = token1;
    setValue1(value2);
    setToken1(token2);
    setValue2(prevValue1);
    setToken2(prevToken1);
  };

  return (
    <SwapStyles>
      <div className="tg">
        <InputComp value={value1} token={token1} setValue={setValue1} setToken={setToken1} txType="Sell" />
        <InputComp value={value2} token={token2} setValue={setValue2} setToken={setToken2} txType="Buy" />
        <div className="swap-token" onClick={handleSwapValues}>
          <ArrowIcon />
        </div>
      </div>

      <div className="btn">
        <DynamicButton>Swap</DynamicButton>
      </div>

      {/*Chart Component*/}
      <Chart token={token1} />
    </SwapStyles>
  );
};
