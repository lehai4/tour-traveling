import { useCallback, useEffect, useState } from "react";
import { Form } from "../..";

const SliderOne = () => {
  const [scrollY, setScrollY] = useState<number>(63);

  const handleScroll = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (window.scrollY === 0) {
        setScrollY(63);
      } else {
        setScrollY(-window.scrollY);
      }
    },
    [scrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div className="ppb_wrapper">
      <div
        className="one withsmallpadding ppb_tour_search_youtube parallax withbg "
        data-jarallax-video="https://www.youtube.com/watch?v=JPe2mwq96cw"
        style={{ textAlign: "center", height: "800px", color: "#ffffff" }}
        data-jarallax-original-styles="text-align:center;height:800px;color:#ffffff;"
      >
        <div
          className="overlay_background"
          style={{ background: "rgba(0,0,0,0.3)" }}
        ></div>

        <div className="center_wrapper">
          <div className="inner_content">
            <div className="standard-wrapper">
              <h2 className="ppb_title" style={{ color: "#ffffff" }}>
                Where do you want to go?
              </h2>
              <div className="page_tagline" style={{ color: "#ffffff" }}>
                Trips, experiences, and places. All in one service.
              </div>
              {/* Form */}
              <Form />
              {/* Form */}
            </div>
          </div>
        </div>
        <div
          id="jarallax-container-0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: -100,
          }}
        >
          <div
            style={{
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(https://img.youtube.com/vi/JPe2mwq96cw/maxresdefault.jpg&quot;)",
              position: "fixed",
              top: 0,
              left: 0,
              width: "1903px",
              overflow: "hidden",
              pointerEvents: "none",
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              marginTop: "-63px",
              transform: `translate3d(0px, ${scrollY}px, 0px)`,
              display: "block",
            }}
          ></div>
          <iframe
            id="VideoWorker-0"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="Spectacular Norway - from the air"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/JPe2mwq96cw?autoplay=1&loop=1&mute=1&showinfo=0&controls=0&autohide=1&rel=0&playsinline=1&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fthemes.themegoods.com&widgetid=1"
            style={{
              position: "fixed",
              inset: "0px",
              width: "1903px",
              height: "1470.44px",
              maxWidth: "none",
              maxHeight: "none",
              margin: "-466.219px 0px 0px",
              zIndex: -1,
              transform: "translate3d(0px, 68.25px, 0px)",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
