import { SpiderGraph as spiderGraph } from "rating-charts.js";
import { memo, useEffect } from "react";
import { Margins, Size, Titles } from "../../Types";

export type SpiderGraphDataProps = {
  key: string;
  value: number;
};

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
}: SpiderGraphProps) => {
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

export default memo(SpiderGraph);
