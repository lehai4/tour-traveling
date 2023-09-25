import { Col } from "antd";
import { destination } from "../../MockAPI";

const Destination = () => {
  return (
    <div className="one ppb_destination_grid">
      <div className="page_content_wrapper">
        <div className="standard-wrapper">
          <div className="ant-row flex flex-row flex-wrap -mx-4 gap-y-8">
            {destination.map((des, i) => (
              <Col sm={24} md={12} xl={6} xs={24} lg={12} key={i}>
                <div className="element grid">
                  <div
                    data-bg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"
                    style={{
                      backgroundImage: `url(${des.image})`,
                    }}
                    className="image-destination portfolio_type"
                  >
                    <a href={des.url}></a>
                    <div className="destination_info_wrapper">
                      <div className="destination_info_content">
                        <h3>{des.content}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
