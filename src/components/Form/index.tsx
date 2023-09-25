import { useState } from "react";
import SearchInput from "./SearchInput";
import Selected from "./Seleted";
import { Option } from "../../typeProps";
import DateSelect from "./DateSelect";
import { Button } from "antd";

const options: Option[] = [
  { label: "Price Low to High", value: "price low to high" },
  { label: "Price High to Low", value: "price high to low" },
  { label: "Sort By Name", value: "sort by Name" },
  { label: "Sort By Popularity", value: "sort by popularity" },
  { label: "Sort By Review Score", value: "sort by review score" },
];

const option: Option[] = [
  { label: "January", value: "january" },
  { label: "February", value: "february" },
  { label: "March", value: "march" },
  { label: "April", value: "april" },
  { label: "May", value: "may" },
  { label: "June", value: "june" },
  { label: "July", value: "july" },
  { label: "August", value: "august" },
  { label: "September", value: "september" },
  { label: "October", value: "october" },
  { label: "November", value: "november" },
  { label: "December", value: "December" },
];
const Form = () => {
  const [value, setValue] = useState<string>("");
  const [selected, setSelected] = useState<Option>({
    label: "Soft by Date",
    value: "soft by date",
  });
  const [selectedDate, setSelectedDate] = useState<Option>({
    label: "Any Month",
    value: "any month",
  });
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };
  const handleChange = (e: Option) => {
    setSelected(e);
  };
  const handleChangeDate = (e: Option) => {
    setSelectedDate(e);
  };
  return (
    <form method="" action="" id="form">
      <div className="flex flex-row md:flex-col items-center justify-between gap-y-2">
        <div className="form-group">
          <SearchInput value={value} handleSearch={handleSearch} />
        </div>
        <div className="form-group">
          <DateSelect
            value={selectedDate}
            options={option}
            handleChange={handleChangeDate}
          />
        </div>
        <div className="form-group">
          <Selected
            value={selected}
            options={options}
            handleChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Button
            size="large"
            style={{
              background: "rgb(255, 74, 82)",
              border: "rgb(255, 74, 82)",
              color: "white",
            }}
            className="ant-btn-search"
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
