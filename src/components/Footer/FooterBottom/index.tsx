const FooterBottom = () => {
  return (
    <footer id="footer" className="footer footer_bar">
      <div
        className="standard-wrapper"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "auto",
            wordWrap: "break-word",
            background: "#000",
          }}
          className="footer_bar_wrapper"
        >
          <div className="flex items-center flex-row md:flex-col-reverse md:items-start justify-between">
            <p id="copyright">
              © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
            </p>
            <div className="menu-footer">
              <div className="flex flex-row items-end justify-between gap-4">
                {["Home", "Tours", "Blog", "Purcharse Theme"].map((_, i) => (
                  <div key={i}>
                    <span>{_}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
