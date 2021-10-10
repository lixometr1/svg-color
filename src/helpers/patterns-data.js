export default Array(24)
  .fill(0)
  .map((item, idx) => {
    const id = idx + 1;
    return {
      url: `/patterns/${id}.svg`,
      id: id,
    };
  });
