import {
  CalendarOutlined,
  DownOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { Button } from "antd";
import { useRef, useState } from "react";
import { Option } from "../../typeProps";
import SearchInput from "./SearchInput";
import Selected from "./Seleted";

// soft
const options: Option[] = [
  { label: "Soft by Date", value: "soft by date" },
  { label: "Price Low to High", value: "price low to high" },
  { label: "Price High to Low", value: "price high to low" },
  { label: "Sort By Name", value: "sort by Name" },
  { label: "Sort By Popularity", value: "sort by popularity" },
  { label: "Sort By Review Score", value: "sort by review score" },
];
// month
const option: Option[] = [
  {
    label: "Any Month",
    value: "any month",
  },
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
// All Category
const category: Option[] = [
  { label: "All Categories", value: "all categories" },
  { label: "Mountain", value: "mountain" },
  { label: "Rural", value: "rural" },
  { label: "Snow & Ice", value: "snow & ice" },
  { label: "Wildlife", value: "wildlife" },
];
// Any Destination
const destination: Option[] = [
  { label: "All Categories", value: "all categories" },
  { label: "Tokyo", value: "tokyo" },
  { label: "Seoul", value: "seoul" },
  { label: "Paris", value: "paris" },
  { label: "London", value: "london" },
];
const Form = () => {
  const refElement = useRef<HTMLAnchorElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [dataForm, setDataForm] = useState({
    inPutDes: "",
    budget: "",
  });
  const [monthSelect, setMonthSelect] = useState<Option>({
    label: "Soft by Date",
    value: "soft by date",
  });
  const [softSelect, setSoftSelect] = useState<Option>({
    label: "Any Month",
    value: "any month",
  });
  const [cateSelect, setCateSelect] = useState<Option>({
    label: "All Categories",
    value: "all categories",
  });
  const [desSelect, setDesSelect] = useState<Option>({
    label: "Any Destinations",
    value: "any destinations",
  });
  desSelect;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDataForm((preV) => {
      return {
        ...preV,
        [name ? name : ""]: value,
      };
    });
  };

  const handleChangeMonth = (e: Option) => {
    setMonthSelect(e);
  };
  const handleChangeSoft = (e: Option) => {
    setSoftSelect(e);
  };
  const handleChangeCategory = (e: Option) => {
    setCateSelect(e);
  };
  const handleChangeDesti = (e: Option) => {
    setDesSelect(e);
  };
  const handleToggle = () => {
    setToggle((preV) => !preV);
  };

  return (
    <form method="" action="" id="form">
      <div
        className={`flex flex-row md:flex-col items-center justify-between gap-y-2 mb-6 ${
          toggle ? "" : "md:mb-6"
        } md:mb-2`}
      >
        <div className="form-group">
          <SearchInput
            name="inPutDes"
            placeholder="Destination, city"
            icon={<SearchOutlined style={{ fontSize: 18, opacity: 0.5 }} />}
            value={dataForm.inPutDes}
            handleSearch={handleChange}
          />
        </div>
        <div className="form-group">
          <Selected
            icon={<CalendarOutlined style={{ fontSize: 18, opacity: 0.5 }} />}
            value={monthSelect}
            options={option}
            handleChange={handleChangeMonth}
          />
        </div>
        <div className="form-group">
          <Selected
            icon={<UnfoldMoreIcon style={{ fontSize: 18, opacity: 0.5 }} />}
            value={softSelect}
            options={options}
            handleChange={handleChangeSoft}
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
      <div
        className={`${
          toggle ? "block" : "hidden"
        } flex flex-row md:flex-col items-center justify-between gap-y-2 mb-6`}
      >
        {/* category */}
        <div className="form-group">
          <Selected
            icon={<DownOutlined style={{ fontSize: 16, opacity: 0.5 }} />}
            value={cateSelect}
            options={category}
            handleChange={handleChangeCategory}
          />
        </div>
        {/* destination */}
        <div className="form-group">
          <Selected
            icon={<DownOutlined style={{ fontSize: 16, opacity: 0.5 }} />}
            value={desSelect}
            options={destination}
            handleChange={handleChangeDesti}
          />
        </div>
        {/* budget */}
        <div className="form-group">
          <SearchInput
            name="budget"
            placeholder="Max budget ex. 500"
            icon={<AttachMoneyIcon style={{ fontSize: 18, opacity: 0.5 }} />}
            value={dataForm.budget}
            handleSearch={handleChange}
          />
        </div>
        <div className="form-group"></div>
      </div>
      <div className="tour_advance_search_wrapper_link">
        <a
          id="tour_advance_search_toggle"
          ref={refElement}
          onClick={handleToggle}
        >
          {!toggle ? <DownOutlined /> : <UpOutlined />}
          Advanced Search
        </a>
      </div>
    </form>
  );
};

export default Form;
