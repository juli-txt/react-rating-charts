import { Histogram as histogram } from "rating-charts.js";
import { ReactElement, useEffect } from "react";
import { Margins, Size, Titles, Tooltips } from "../../Types";

/**
 * The prop type for the `HistogramTooltip` prop.
 *
 * @prop setUserInfoTooltip - Function to set the user info tooltip.
 * @prop {@link Tooltips} - The remaining tooltips for the histogram.
 * @interface
 */
export type HistogramTooltipProps = Tooltips & {
  setUserInfoTooltip?: (value: string, percentage: string) => string;
};

/**
 * The prop type for the `Histogram` component.
 *
 * @prop data - The data for the histogram.
 * @prop minRatingValue - The minimum rating value.
 * @prop ratingValue - The rating value.
 * @prop color - The color accent of the histogram.
 * @prop setUserInfo - Function to set the user info.
 * @prop margins - The margins of the histogram.
 * @prop size - The size of the histogram.
 * @prop titles - The titles of the histogram.
 * @prop tooltips - The tooltips of the histogram.
 * @interface
 */
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
}: HistogramProps): ReactElement<HistogramProps> => {
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

/**
 * The `Histogram` component.
 *
 * This component shows a histogram chart.
 *
 * @param props - The props for the component.
 * @returns - The `Histogram` component.
 *
 * @example
 * ```tsx
 * <Histogram
 *  data={[1, 2, 3, 4, 5]}
 *  minRatingValue={1}
 *  ratingValue={5}
 *  color="#000000"
 *  setUserInfo={(value, percentage) => `${value} (${percentage})`}
 *  margins={{ marginTop: 10, marginRight: 10, marginBottom: 10, marginLeft: 10 }}
 *  size={{ width: 500, height: 500 }}
 *  titles={{ title: "Title", xAxisTitle: "X Axis Title", yAxisTitle: "Y Axis Title" }}
 *  tooltips={{ setUserInfoTooltip: (value, percentage) => `${value} (${percentage})` }}
 * />
 * ```
 */
export default Histogram;
