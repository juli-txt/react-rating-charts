import { LineGraph as lineGraph } from "rating-charts.js";
import { memo, useEffect } from "react";
import { Margins, Size, Titles, Tooltips } from "../../Types";

export type LineGraphData = {
  value: number;
  deviation?: number;
  timestamp: Date;
};

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

export default memo(LineGraph);
