import { LineGraph as lineGraph } from "rating-charts.js";
import { memo, useEffect } from "react";
import { Margins, Size, Titles, Tooltips } from "../../Types";

/**
 * The prop type for the `LineGraphData` prop.
 *
 * @prop value - The value of the line graph data.
 * @prop deviation - The deviation of the line graph data.
 * @prop timestamp - The timestamp of the line graph data.
 * @interface
 */
export type LineGraphData = {
  value: number;
  deviation?: number;
  timestamp: Date;
};

/**
 * The prop type for the `LineGraphTooltip` prop.
 *
 * @prop setAreaTooltip - Function to set the area tooltip.
 * @prop setDataTooltip - Function to set the data tooltip.
 * @prop setLowerDeviationTooltip - Function to set the lower deviation tooltip.
 * @prop setUpperDeviationTooltip - Function to set the upper deviation tooltip.
 * @prop {@link Tooltips} - The remaining tooltips for the histogram.
 * @interface
 */
export type LineGraphTooltipProps = Tooltips & {
  setAreaTooltip?: () => string;
  setDataTooltip?: (
    value: number,
    deviation: number,
    timestamp: string
  ) => string;
  setLowerDeviationTooltip?: (value: number, timestamp: string) => string;
  setUpperDeviationTooltip?: (value: number, timestamp: string) => string;
};

/**
 * The prop type for the `LineGraph` component.
 *
 * @prop data - The data for the line graph.
 * @prop minRatingValue - The minimum rating value.
 * @prop color - The color accent of the line graph.
 * @prop margins - The margins of the line graph.
 * @prop size - The size of the line graph.
 * @prop titles - The titles of the line graph.
 * @prop tooltips - The tooltips of the line graph.
 * @interface
 */
export type LineGraphProps = {
  data: LineGraphData[];
  minRatingValue: number;
  color?: string;
  margins?: Margins;
  size?: Size;
  titles?: Titles;
  tooltips?: LineGraphTooltipProps;
};

const LineGraph = ({
  data,
  minRatingValue,
  color,
  margins,
  size,
  titles,
  tooltips,
}: LineGraphProps) => {
  useEffect(() => {
    lineGraph(data, minRatingValue, {
      selector: "#line-chart",
      color: color,
      margins: {
        marginTop: margins?.marginTop,
        marginRight: margins?.marginRight,
        marginBottom: margins?.marginBottom,
        marginLeft: margins?.marginLeft,
      },
      size: {
        width: size?.width,
        height: size?.height,
      },
      titles: {
        title: titles?.title,
        xAxisTitle: titles?.xAxisTitle,
        yAxisTitle: titles?.yAxisTitle,
      },
      tooltips: {
        setAreaTooltip: tooltips?.setAreaTooltip,
        setDataTooltip: tooltips?.setDataTooltip,
        setLowerDeviationTooltip: tooltips?.setLowerDeviationTooltip,
        setUpperDeviationTooltip: tooltips?.setUpperDeviationTooltip,
        setXAxisTooltip: tooltips?.setXAxisTooltip,
        setYAxisTooltip: tooltips?.setYAxisTooltip,
      },
    });
  }, [data, minRatingValue, margins, size, titles, tooltips]);

  return <div id="line-chart" />;
};

/**
 * The `LineGraph` component.
 *
 * This component shows a line graph.
 *
 * @param props - The properties of the component.
 * @returns - The `LineGraph` component.
 *
 * @example
 * ```tsx
 * <LineGraph
 * data={[
 * { value: 1, timestamp: new Date() },
 * { value: 2, timestamp: new Date() },
 * { value: 3, timestamp: new Date() },
 * ]}
 * minRatingValue={1}
 * color="#000000"
 * margins={{ marginTop: 10, marginRight: 10, marginBottom: 10, marginLeft: 10 }}
 * size={{ width: 100, height: 100 }}
 * titles={{ title: "Title", xAxisTitle: "X Axis Title", yAxisTitle: "Y Axis Title" }}
 * tooltips={{
 * setAreaTooltip: () => "Area Tooltip",
 * setDataTooltip: (value, deviation, timestamp) => `${value} (${deviation}) - ${timestamp}`,
 * setLowerDeviationTooltip: (value, timestamp) => `${value} - ${timestamp}`,
 * setUpperDeviationTooltip: (value, timestamp) => `${value} - ${timestamp}`,
 * setXAxisTooltip: () => "X Axis Tooltip",
 * setYAxisTooltip: () => "Y Axis Tooltip",
 * }}
 * />
 */
export default memo(LineGraph);
