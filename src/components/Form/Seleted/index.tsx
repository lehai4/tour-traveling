import { Select } from "antd";
import { Option } from "../../../typeProps";
type SelectedProps = {
  options: Option[];
  value: Option;
  icon: any;
  handleChange: (e: Option) => void;
};
const Selected = ({ options, handleChange, value, icon }: SelectedProps) => {
  return (
    <Select
      value={value}
      size="large"
      suffixIcon={<>{icon}</>}
      onChange={handleChange}
      options={options}
      className="ant-select-sort"
    />
  );
};

export default Selected;
