import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages";

export interface IRouterProps {}
const Router: React.FunctionComponent<IRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
