type Tooltips = {
  setXAxisTooltip?: (
    minValue: number | string,
    maxValue: number | string
  ) => string;
  setYAxisTooltip?: (
    minValue: number | string,
    maxValue: number | string
  ) => string;
};

export default Tooltips;
