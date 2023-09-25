type SectionTitleProps = {
  title: string;
  desc: string;
};
const SectionTitle = ({ title, desc }: SectionTitleProps) => {
  return (
    <div
      className="one standard-wrapper wrapper-title"
      style={{
        textAlign: "center",
        padding: 0,
        marginTop: 70,
      }}
    >
      <span className="ppb_title">{title}</span>
      <span className="page_tagline">{desc}</span>
    </div>
  );
};

export default SectionTitle;
