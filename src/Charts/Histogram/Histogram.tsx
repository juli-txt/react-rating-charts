import { Histogram as histogram } from "rating-charts.js";
import { memo, useEffect } from "react";
import { Margins, Size, Titles, Tooltips } from "../../Types";

export type HistogramTooltipProps = Tooltips & {
  setUserInfoTooltip?: (value: string, percentage: string) => string;
};

export type HistogramProps = {
  data: number[];
  minRatingValue: number;
  ratingValue: number;
  color?: string;
  setUserInfo?: (value: string, percentage: string) => string;
  margins?: Margins;
  size?: Size;
  titles?: Titles;
  tooltips?: HistogramTooltipProps;
};

const Histogram = ({
  data,
  minRatingValue,
  ratingValue,
  color,
  setUserInfo,
  margins,
  size,
  titles,
  tooltips,
}: HistogramProps) => {
  useEffect(() => {
    histogram(data, minRatingValue, ratingValue, {
      selector: "#histogram",
      color: color,
      setUserInfo: setUserInfo,
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
        setUserInfoTooltip: tooltips?.setUserInfoTooltip,
        setXAxisTooltip: tooltips?.setXAxisTooltip,
        setYAxisTooltip: tooltips?.setYAxisTooltip,
      },
    });
  }, [
    data,
    minRatingValue,
    ratingValue,
    color,
    setUserInfo,
    margins,
    size,
    titles,
    tooltips,
  ]);

  return <div id="histogram" />;
};

export default memo(Histogram);
