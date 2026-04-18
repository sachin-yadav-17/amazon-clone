import { NumericFormat } from "react-number-format";

function Price({ value }:any) {
  return (
    <NumericFormat
      value={value}
      displayType="text"
      thousandSeparator={true}
      prefix="₹"
    />
  );
}

export default Price;