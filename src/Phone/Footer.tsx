function Footer() {
  const footerStyle = {
    textAlign: "center" as const,
    paddingTop: "1.1em" as const,
    color: "white" as const,
    fontSize: "0.8em" as const,
  };
  return (
    <div style={footerStyle}>
      powered by{" "}
      <a
        style={{ color: "white", textDecoration: "underline" }}
        href="https://dumb.co"
      >
        dumb.co
      </a>
    </div>
  );
}

export default Footer;
