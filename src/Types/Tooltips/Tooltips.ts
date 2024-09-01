/**
 * The `Tooltips` type.
 *
 * This type represents the tooltips of a component.
 *
 * @prop setXAxisTooltip - The x-axis tooltip.
 * @prop setYAxisTooltip - The y-axis tooltip.
 * @interface
 */
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
