const rows = [
  [
    { name: "ADDIESoft", icon: "⚙" },
    { name: "Bangla Shikhi", icon: "🌿" },
    { name: "Relaxy", icon: "✦" },
    { name: "backpack", icon: "▲" },
    { name: "Goldman Sachs", icon: "◈" },
    { name: "CLARITY TRADERS", icon: "🐾" },
    { name: "Esdiac", icon: "☎" },
    { name: "Learndojo", icon: "◉" },
  ],
  [
    { name: "telenor", icon: "↗" },
    { name: "axiata", icon: "◆" },
    { name: "GUARDIAN", icon: "⬡" },
    { name: "crantech", icon: "⬢" },
    { name: "CRE Guard", icon: "//" },
    { name: "KlASIO", icon: "❖" },
    { name: "Affine", icon: "▪" },
    { name: "telenor", icon: "↗" },
  ],
  [
    { name: "Relaxy", icon: "✦" },
    { name: "Bangla Shikhi", icon: "🌿" },
    { name: "ADDIESoft", icon: "⚙" },
    { name: "যান্ত্রিক", icon: "⚡" },
    { name: "VENEX", icon: "◈" },
    { name: "Y Combinator", icon: "Y" },
    { name: "WAYS & VILLAS", icon: "↗" },
    { name: "triply", icon: "◉" },
  ],
  [
    { name: "Gainsty", icon: "★" },
    { name: "FITMATE", icon: "◎" },
    { name: "Farasha Digital", icon: "❋" },
    { name: "Docuseal", icon: "●" },
    { name: "CPG Synergy", icon: "⊙" },
    { name: "Compai.es", icon: "⚡" },
    { name: "arnesia", icon: "❋" },
  ],
];

const styles = `
  @keyframes marquee-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .marquee-left {
    animation: marquee-left 60s linear infinite;
  }
  .marquee-right {
    animation: marquee-right 60s linear infinite;
  }
`;

function MarqueeRow({ logos, direction = "left" }) {
  const doubled = [...logos, ...logos];

  return (
    <div style={{ display: "flex", overflow: "hidden", width: "100%" , maxWidth: "80rem", marginLeft: "auto",
    marginRight: "auto"}}>
      <div
        className={direction === "left" ? "marquee-left" : "marquee-right"}
        style={{ display: "flex", gap: "40px", whiteSpace: "nowrap" }}
      >
        {doubled.map((logo, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#9ca3af",
              fontWeight: "600",
              fontSize: "18px",
              padding: "0 12px",
              userSelect: "none",
            }}
          >
            <span style={{ opacity: 0.5, fontSize: "25px" }}>{logo.icon}</span>
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TrustedBrands() {
  return (
    <>
      <style>{styles}</style>
      <section
        style={{
          padding: "48px 0",
          backgroundColor: "#f9fafb",
          overflow: "hidden",
        }}
      >
        <h2
          style={{
           
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "40px",
          }}
        >
          Trusted by 200+ of the world's top brands
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          <MarqueeRow logos={rows[0]} direction="left" />
          <MarqueeRow logos={rows[1]} direction="right" />
          <MarqueeRow logos={rows[2]} direction="left" />
          <MarqueeRow logos={rows[3]} direction="right" />
        </div>
      </section>
    </>
  );
}