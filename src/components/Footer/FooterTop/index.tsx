import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { SvgIcon } from "@mui/material";
import { Button, Col, Image } from "antd";
import { footer, footerImage } from "../../../MockAPI";
const FooterTop = () => {
  return (
    <div id="footer" className="ppb_wrapper">
      <div className="standard-wrapper">
        <div className="ant-row flex flex-row flex-wrap -mx-4 gap-y-8">
          <Col sm={24} md={8} xl={8} xs={24} lg={8}>
            <div className="item">
              <div className="widget widget_item">
                <h2 className="widgettitle">Our Awards</h2>
                <div className="textwidget">
                  <p>
                    London is a megalopolis of people, ideas and frenetic
                    energy. The capital and largest city of the United Kingdom.
                    <br />
                    <img
                      src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                      alt=""
                      height={113}
                      width={246}
                    />
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={24} md={8} xl={8} xs={24} lg={8}>
            <div className="item">
              <div className="widget widget_item">
                <h2 className="widgettitle">Contact Info</h2>
                <div className="textwidget">
                  <p className="phone">
                    <MobileOutlined />
                    1-567-124-44227
                  </p>
                  <p className="address">
                    <EnvironmentOutlined />
                    184 Main Street East Perl Habour 8007
                  </p>
                  <p className="time-active">
                    <ClockCircleOutlined />
                    Mon - Sat 8.00 - 18.00 Sunday CLOSED
                  </p>
                  <div style={{ marginTop: 20 }}>
                    <div className="ant-row flex flex-row md:justify-center flex-wrap">
                      {footer.map((social) => (
                        <Col sm={3} md={4} xl={4} xs={3} lg={4} key={social.id}>
                          <div className="item">
                            <Button
                              shape="circle"
                              icon={
                                <SvgIcon
                                  component={social.icon}
                                  sx={{
                                    color: social.color,
                                  }}
                                />
                              }
                              size="large"
                              style={{
                                background: social.bg,
                                border: `1px solid ${social.bg}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            />
                          </div>
                        </Col>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={24} md={8} xl={8} xs={24} lg={8}>
            <div className="item">
              <div className="widget widget_item">
                <h2 className="widgettitle">Contact Info</h2>
                <div style={{ marginTop: 20 }}>
                  <div className="ant-row flex flex-row flex-wrap">
                    {footerImage.map((_, i) => (
                      <Col
                        sm={8}
                        md={8}
                        xl={8}
                        xs={8}
                        lg={8}
                        key={i}
                        className="ant-col-override"
                      >
                        <div className="item">
                          <Image
                            src={_.image}
                            preview={false}
                            style={{ borderRadius: "5px" }}
                          />
                        </div>
                      </Col>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
