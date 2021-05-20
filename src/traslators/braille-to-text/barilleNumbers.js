const brailleNumbers = (c) => {
  const nums = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "0",
  };
  return nums[c] || "";
};

export { brailleNumbers };
