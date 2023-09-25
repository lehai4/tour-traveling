import { Layout, theme } from "antd";
import GlobalStyles from "./GlobalStyles";
import { FooterBottom } from "./components";
import Router from "./routes";
const { Content } = Layout;

function App() {
  const { token } = theme.useToken();

  return (
    <GlobalStyles>
      <Layout
        id="wrapper"
        className="layout hasbg transparent"
        style={{ background: token.colorBgContainer }}
      >
        <Content>
          <div className="site-layout-content">
            <Router />
          </div>
        </Content>
        <FooterBottom />
      </Layout>
    </GlobalStyles>
  );
}

export default App;
