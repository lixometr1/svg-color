export default (svg) => {
  const b64Start = "data:image/svg+xml;base64,";
  const buf = Buffer.from(svg);
  const svg64 = buf.toString("base64");

  const image64 = b64Start + svg64;
  return image64;
};
