import { Button, Col } from "antd";
import { article } from "../../MockAPI";
import { RightOutlined } from "@ant-design/icons";
const Article = () => {
  return (
    <div
      className="ppb_tour_classic one nopadding article"
      style={{ margin: "50px 0" }}
    >
      <div className="page_content_wrapper">
        <div className="standard-wrapper">
          <div className="ant-row flex flex-row flex-wrap -mx-4 gap-y-8">
            {article.map((art, i) => (
              <Col sm={24} md={12} xl={8} xs={24} lg={12} key={i}>
                <div className="item grid">
                  <div className="image-article portfolio_type">
                    <a href={art.url} className="tour_image">
                      <img src={art.image} alt={art.title} />
                    </a>
                    <div className="article_info_wrapper">
                      <a href={art.url}>
                        <span>{art.day}</span>
                        <h4 className="md:font-bold font-extrabold">
                          {art.title}
                        </h4>
                      </a>
                      <p>{art.desc}</p>
                      <Button
                        className="ant-btn-more flex items-center"
                        style={{
                          border: "none",
                          boxShadow: "none",
                          paddingLeft: 0,
                          fontSize: 15,
                          marginTop: 15,
                          color: "rgba(0,0,0,0.3)",
                        }}
                      >
                        Read More
                        <RightOutlined />
                      </Button>
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

export default Article;
