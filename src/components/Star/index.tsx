import { Rate } from "antd";
type StarProps = {
  value: number;
  style: React.CSSProperties;
};

const Star = ({ value, style }: StarProps) => {
  return <Rate value={value} style={style} disabled />;
};

export default Star;
