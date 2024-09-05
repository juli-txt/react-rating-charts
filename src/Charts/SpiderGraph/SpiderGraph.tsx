import { SpiderGraph as spiderGraph } from "rating-charts.js";
import { ReactElement, useEffect } from "react";
import { Margins, Size, Titles } from "../../Types";

/**
 * The prop type for the `SpiderGraphData` prop.
 *
 * @prop key - The key of the spider graph data.
 * @prop value - The value of the spider graph data.
 * @interface
 */
export type SpiderGraphDataProps = {
  key: string;
  value: number;
};

/**
 * The prop type for the `SpiderGraph` component.
 *
 * @prop data - The data for the spider graph.
 * @prop minRatingValue - The minimum rating value.
 * @prop color - The color accent of the spider graph.
 * @prop margins - The margins of the spider graph.
 * @prop size - The size of the spider graph.
 * @prop setTooltip - Function to set the tooltip.
 * @prop title - The title of the spider graph.
 * @interface
 */
export type SpiderGraphProps = {
  data: SpiderGraphDataProps[];
  minRatingValue: number;
  color?: string;
  margins?: Margins;
  size?: Size;
  setTooltip?: (concept: string, value: number) => string;
  title?: Titles["title"];
};

const SpiderGraph = ({
  data,
  minRatingValue,
  color,
  margins,
  setTooltip,
  size,
  title,
}: SpiderGraphProps): ReactElement<SpiderGraphProps> => {
  useEffect(() => {
    spiderGraph(data, minRatingValue, {
      size: { width: size?.width, height: size?.height },
      color: color,
      margins: {
        marginTop: margins?.marginTop,
        marginRight: margins?.marginRight,
        marginBottom: margins?.marginBottom,
        marginLeft: margins?.marginLeft,
      },
      selector: "#spider-chart",
      setTooltip: setTooltip,
      title: title,
    });
  }, [data, minRatingValue, size, color, margins, title, setTooltip]);

  return <div id="spider-chart" />;
};

/**
 * The `SpiderGraph` component.
 *
 * This component shows a spider graph.
 *
 * @param props - The props of the component.
 * @returns - The `SpiderGraph` component.
 *
 * @example
 * ```tsx
 * <SpiderGraph
 * data={[
 * { key: "Concept 1", value: 5 },
 * { key: "Concept 2", value: 4 },
 * { key: "Concept 3", value: 3 },
 * ]}
 * minRatingValue={1}
 * color="#000000"
 * setTooltip={(concept, value) => `${concept}: ${value}`}
 * title="Spider Graph"
 * />
 * ```
 */
export default SpiderGraph;
