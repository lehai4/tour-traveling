import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type SearchInputProps = {
  value: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchInput = ({ value, handleSearch }: SearchInputProps) => {
  return (
    <Input
      size="large"
      className="ant-input-search"
      value={value}
      suffix={
        <SearchOutlined
          style={{
            fontSize: 16,
          }}
        />
      }
      placeholder="Destination, city"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
    />
  );
};

export default SearchInput;
