import { Select } from "antd";
import { Option } from "../../../typeProps";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { SvgIcon } from "@mui/material";
type SelectedProps = {
  options: Option[];
  value: Option;
  handleChange: (e: Option) => void;
};
const Selected = ({ options, handleChange, value }: SelectedProps) => {
  return (
    <Select
      value={value}
      size="large"
      suffixIcon={<SvgIcon component={UnfoldMoreIcon} />}
      onChange={handleChange}
      options={options}
      className="ant-select-sort"
    />
  );
};

export default Selected;
