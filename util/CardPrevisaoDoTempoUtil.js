
export const backgroundCard =  (temperatura) => {
  if (temperatura < 16) return "#3933FF";
  else if (temperatura < 25) return "#3396FF";
  else if (temperatura < 36) return '#f7b733';
  else return '#F4A458';
};
