import { Select } from "antd";
import { Option } from "../../../typeProps";
import { CalendarOutlined } from "@ant-design/icons";
import { SvgIcon } from "@mui/material";
type DateSelectProps = {
  options: Option[];
  value: Option;
  handleChange: (e: Option) => void;
};
const DateSelect = ({ options, handleChange, value }: DateSelectProps) => {
  return (
    <Select
      value={value}
      size="large"
      suffixIcon={<SvgIcon component={CalendarOutlined} />}
      onChange={handleChange}
      options={options}
      className="ant-select-date"
    />
  );
};

export default DateSelect;
