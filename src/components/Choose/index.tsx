import { Col } from "antd";
import { choose } from "../../MockAPI";

const Choose = () => {
  return (
    <div
      className="ppb_tour_classic one nopadding"
      style={{ margin: "50px 0" }}
    >
      <div className="page_content_wrapper">
        <div className="standard-wrapper">
          <div className="ant-row flex flex-row flex-wrap -mx-4 gap-y-8">
            {choose.map((choose, i) => (
              <Col sm={24} md={12} xl={8} xs={24} lg={12} key={i}>
                <div className="item">
                  <div className="item-choose portfolio_type">
                    <p>
                      <img src={choose.image} alt={choose.title} />
                    </p>
                    <span className="text-xl md:text-3xl md:font-bold font-extrabold">
                      {choose.title}
                    </span>
                    <p className="text-base tracking-wider md:text-xl">
                      {choose.desc}
                    </p>
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

export default Choose;
