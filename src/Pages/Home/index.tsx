import {
  CloseOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  UpOutlined,
} from "@ant-design/icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import type { MenuProps } from "antd";
import { Badge, Button, Drawer, FloatButton, Image, Menu, Space } from "antd";
import Link from "antd/es/typography/Link";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Article,
  Choose,
  Destination,
  FooterTop,
  SectionTitle,
  SliderOne,
  SliderTwo,
  Trip,
} from "../../components";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <Space style={{ columnGap: 0 }}>
      Home
      <KeyboardArrowDownIcon />
    </Space>,
    "home",
    <></>,
    [
      getItem("Home - 1", "home1"),
      getItem("Home - 2", "home2"),
      getItem("Home - 3", "home3"),
      getItem("Home - 4", "home4"),
    ]
  ),
  getItem(
    <Space style={{ columnGap: 0 }}>
      Tours
      <KeyboardArrowDownIcon />
    </Space>,
    "tours",
    <></>,
    [
      getItem("Tours Classic Fullwidth", "tours1", null, [
        getItem("2 Columns ", "colum2"),
        getItem("3 Columns ", "colum3"),
        getItem("4 Columns ", "colum4"),
      ]),
      getItem("Tours Classic Sidebar", "tours2", null, [
        getItem("Right Siderbar", "right-sidebar"),
        getItem("Left Siderbar", "left-sidebar"),
      ]),
      getItem("Tours Grid Fullwidth", "tours3", null, [
        getItem("2 Columns ", "co2"),
        getItem("3 Columns ", "co3"),
        getItem("4 Columns ", "co4"),
      ]),
      getItem("Tours Grid Sidebar", "tours4", null, [
        getItem("Right Siderbar", "r"),
        getItem("Left Siderbar", "l"),
      ]),
      getItem("Tours List Sidebar", "tours5", null, [
        getItem("Right Siderbar", "ri"),
        getItem("Left Siderbar", "le"),
      ]),
      getItem("Tours Header Type", "tours6", null, [
        getItem("Featured Image", "featured-image"),
        getItem("Video", "video"),
      ]),
    ]
  ),
  getItem(
    <Space style={{ columnGap: 0 }}>
      Booking
      <KeyboardArrowDownIcon />
    </Space>,
    "booking",
    <></>,
    [
      getItem("Online Payment for Booking", "on", null, [
        getItem("Varrible Tours Pricing", "var"),
        getItem("Simple Tours Pricing", "si"),
      ]),
      getItem("Custom BooKing Form", "cs", null, [
        getItem("Booking Form + Custom Date", "b-f"),
      ]),
      getItem("Tours Durations", "t-d", null, [
        getItem("Sigle Days Tour", "sig"),
        getItem("Multiple Days Tours", "mul"),
      ]),
      getItem("Custom Booking URL for Affilate Tour", "cs-b", <></>),
    ]
  ),
  getItem(
    <Space style={{ columnGap: 0 }}>
      Destinations
      <KeyboardArrowDownIcon />
    </Space>,
    "destinations",
    <></>,
    [
      getItem("Destinations Fullwidth", "dest"),
      getItem("Destinations + Video Header", "dest+video"),
    ]
  ),
  getItem(
    <Space style={{ columnGap: 0 }}>
      Pages
      <KeyboardArrowDownIcon />
    </Space>,
    "Pages",
    <></>,
    [
      getItem("About Us", "about"),
      getItem("Contact Us", "contact"),
      getItem("FAQs", "faqs"),
    ]
  ),
  getItem(
    <Space style={{ columnGap: 0 }}>
      Blogs
      <KeyboardArrowDownIcon />
    </Space>,
    "blogs",
    <></>,
    [
      getItem("Blog Right Sidebar", "blogr"),
      getItem("Blog Left Sidebar", "blogl"),
    ]
  ),
  getItem(
    <Space style={{ columnGap: 0 }}>
      Shortcodes
      <KeyboardArrowDownIcon />
    </Space>,
    "shortcodes",
    <></>,
    [
      getItem("Accordion & Toggles", "accordion"),
      getItem("Alert Boxes", "alert"),
    ]
  ),
  getItem(
    <Space style={{ columnGap: 0 }}>
      Shop
      <KeyboardArrowDownIcon />
    </Space>,
    "shop",
    <></>,
    [getItem("Shop Fullwidth", "shop-w"), getItem("Shop Full Sidebar", "shopf")]
  ),
];
const item: MenuItem[] = [
  getItem(<Space style={{ columnGap: 0 }}>Home</Space>, "home", <></>, [
    getItem("Home - 1", "home1"),
    getItem("Home - 2", "home2"),
    getItem("Home - 3", "home3"),
    getItem("Home - 4", "home4"),
  ]),
  getItem(<Space style={{ columnGap: 0 }}>Tours</Space>, "tours", <></>, [
    getItem("Tours Classic Fullwidth", "tours1", null, [
      getItem("2 Columns ", "colum2"),
      getItem("3 Columns ", "colum3"),
      getItem("4 Columns ", "colum4"),
    ]),
    getItem("Tours Classic Sidebar", "tours2", null, [
      getItem("Right Siderbar", "right-sidebar"),
      getItem("Left Siderbar", "left-sidebar"),
    ]),
    getItem("Tours Grid Fullwidth", "tours3", null, [
      getItem("2 Columns ", "co2"),
      getItem("3 Columns ", "co3"),
      getItem("4 Columns ", "co4"),
    ]),
    getItem("Tours Grid Sidebar", "tours4", null, [
      getItem("Right Siderbar", "r"),
      getItem("Left Siderbar", "l"),
    ]),
    getItem("Tours List Sidebar", "tours5", null, [
      getItem("Right Siderbar", "ri"),
      getItem("Left Siderbar", "le"),
    ]),
    getItem("Tours Header Type", "tours6", null, [
      getItem("Featured Image", "featured-image"),
      getItem("Video", "video"),
    ]),
  ]),
  getItem(<Space style={{ columnGap: 0 }}>Booking</Space>, "booking", <></>),
  getItem(
    <Space style={{ columnGap: 0 }}>Destinations</Space>,
    "destinations",
    <></>
  ),
  getItem(<Space style={{ columnGap: 0 }}>Pages</Space>, "Pages", <></>),
  getItem(<Space style={{ columnGap: 0 }}>Blogs</Space>, "blogs", <></>),
  getItem(
    <Space style={{ columnGap: 0 }}>Shortcodes</Space>,
    "shortcodes",
    <></>
  ),
  getItem(<Space style={{ columnGap: 0 }}>Shop</Space>, "shop", <></>),
];
const router = [
  {
    path: "/cart",
    icon: (
      <Badge count={1} className="flex" style={{ lineHeight: "20px" }}>
        <ShoppingCartOutlined style={{ fontSize: 22 }} />
      </Badge>
    ),
  },
];
const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const [scrollToTop, setScrollToTop] = useState<boolean>(false);
  const [offsetScroll, setOffsetScroll] = useState<number>(window.scrollY);

  const showMenu = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClick = (item: any) => {
    navigate(item.key);
  };

  const handleScroll = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      setScrollToTop(window.scrollY > 400 ? true : false);

      if (offsetScroll >= window.scrollY) {
        setScroll(false);
      } else if (offsetScroll <= window.scrollY) {
        setScroll(true);
      }
      setOffsetScroll(window.scrollY);
    },
    [offsetScroll]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <React.Fragment>
      {/* Header */}
      <div
        className={`header_style_wrapper ${
          !scroll ? "scroll_up" : "scroll_down"
        } ${offsetScroll > 30 ? "scroll" : ""}`}
      >
        <div
          className={`top_bar ${!scroll ? "scroll_up" : ""} ${
            offsetScroll > 30 ? "scroll " : "hash"
          }`}
        >
          <div className="standard-wrapper" style={{ padding: "0 30px" }}>
            <div className="flex flex-row items-center justify-between h-full">
              <div
                className={`logo ${offsetScroll === 0 ? "default" : "hidden"}`}
              >
                <Link href="http://127.0.0.1:5173/">
                  <Image
                    src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
                    width={100}
                    preview={false}
                  />
                </Link>
              </div>
              <div
                className={`logo ${offsetScroll > 0 ? "default" : "hidden"}`}
              >
                <Link href="http://127.0.0.1:5173/">
                  <Image
                    src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png"
                    width={100}
                    preview={false}
                  />
                </Link>
              </div>
              <div className="flex items-center">
                <Menu
                  mode="horizontal"
                  items={items}
                  className="menu-bar left-icon"
                />
                <div className="flex items-center gap-5 right-icon">
                  <Button
                    icon={<MenuOutlined />}
                    style={{ border: "none", boxShadow: "none" }}
                    onClick={showMenu}
                  />
                  {router.map((item, i) => (
                    <NavLink to={`${item.path}`} key={i}>
                      {item?.icon}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <SliderOne />
      <SectionTitle
        title="Popular Destinations"
        desc="World's best tourist destinations"
      />
      <Destination />
      <SectionTitle title="Best Value Trips" desc="Best offers trips from us" />
      <Trip />
      <SectionTitle
        title="Why Choose Us"
        desc="Here are reasons you should plan trip with us"
      />
      <Choose />
      <SliderTwo />
      <SectionTitle
        title="Articles & Tips"
        desc="Explore some of the best tips from around the world"
      />
      <Article />
      <FooterTop />
      {/* HeaderBar Mobile */}
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        getContainer={false}
        width={"50%"}
        onClick={(item) => handleClick(item)}
        style={{ textAlign: "center" }}
        headerStyle={{ alignSelf: "end", border: "none" }}
        closeIcon={
          <Button
            icon={<CloseOutlined className="text-white" />}
            style={{ backgroundColor: "#FF4A52", borderColor: "#FF4A52" }}
            size="large"
            shape="circle"
          />
        }
      >
        <Menu
          mode="inline"
          style={{
            background: "#FFFFFF",
            borderRight: 0,
            height: "inherit",
            display: "flex",
            flexDirection: "column",
          }}
          items={item}
        />
      </Drawer>
      {/* ScrollToTop */}
      <FloatButton.BackTop
        icon={<UpOutlined style={{ color: "#FFFFFF" }} />}
        duration={2000}
        visibilityHeight={offsetScroll}
        className={`flex justify-center items-center scroll-smooth ${
          !scrollToTop ? "hidden" : ""
        }`}
      />
    </React.Fragment>
  );
};

export default Home;
