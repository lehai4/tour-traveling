import { ClockCircleOutlined } from "@ant-design/icons";
import { Col } from "antd";
import { Star } from "..";
import { trips } from "../../MockAPI";
const Trip = () => {
  return (
    <div
      className="ppb_tour_classic one nopadding"
      style={{ margin: "50px 0" }}
    >
      <div className="page_content_wrapper">
        <div className="standard-wrapper">
          <div className="ant-row flex flex-row flex-wrap -mx-4 gap-y-8">
            {trips.map((trip, i) => (
              <Col sm={24} md={12} xl={8} xs={24} lg={12} key={i}>
                <div className="item grid">
                  <div className="image-trip portfolio_type">
                    <a href={trip.url} className="tour_image">
                      <img src={trip.image} alt={trip.place} />
                      {trip.sales && <div className="tour_label">Sale</div>}
                      {!trip.discount && (
                        <div className="tour_price">
                          ${trip.price.toLocaleString()}
                        </div>
                      )}
                      {trip.discount && (
                        <div className="tour_price has_discount">
                          <span className="normal_price">
                            ${trip.price.toLocaleString()}
                          </span>
                          ${trip.discount.toLocaleString()}
                        </div>
                      )}
                    </a>
                    <div className="trip_info_wrapper">
                      <a href={trip.url}>
                        <h4 className="md:font-bold font-extrabold">
                          {trip.place}
                        </h4>
                      </a>
                      <div className="tour_excerpt">
                        <p>{trip.desc}</p>
                      </div>
                      <div className="tour_attribute_wrapper">
                        <div className="tour_attribute_rating">
                          <div>
                            <Star
                              value={trip.star}
                              style={{
                                fontSize: 14,
                                color: "#1EC6B6",
                              }}
                            />
                          </div>
                          <div className="tour_attribute_rating_count">
                            {trip.view} &nbsp;reviews
                          </div>
                        </div>
                        <div className="tour_attribute_days">
                          <ClockCircleOutlined />
                          {trip.time}&nbsp;days
                        </div>
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

export default Trip;
