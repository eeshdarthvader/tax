export const capitalize = s => {
  return s && s[0].toUpperCase() + s.slice(1);
};

export const formatDecimal = s => {
  return `${parseFloat(s).toFixed(2)} %`;
};
