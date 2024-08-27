const getFontStyle = (
  color,
  weight,
  size,
  transform = "uppercase",
  lineH = "1.2",
  curs="pointer"
) => {
  return {
    fontFamily:
      "Roboto Condensed, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif",
    fontSize: size,
    fontWeight: weight,
    color: color,
    textTransform: transform,
    transition: "color 0.2s linear 0.1s",
    lineHeight: lineH,
    cursor: curs,
  };
};

export { getFontStyle };
