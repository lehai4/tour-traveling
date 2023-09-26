import { Input } from "antd";

type SearchInputProps = {
  icon: any;
  value: string;
  name: string;
  placeholder: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchInput = ({
  value,
  icon,
  name,
  placeholder,
  handleSearch,
}: SearchInputProps) => {
  return (
    <Input
      size="large"
      name={name}
      className="ant-input-search"
      value={value}
      suffix={<>{icon}</>}
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
    />
  );
};

export default SearchInput;
