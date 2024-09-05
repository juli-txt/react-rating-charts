import { Rating as rating } from "rating-charts.js";
import { useEffect, ReactElement } from "react";
import { Size, Titles } from "../../Types";

/**
 * The prop type for the `RatingTooltip` prop.
 *
 * @prop setDeviationTooltip - Function to set the deviation tooltip.
 * @prop setDeviationTrendTooltip - Function to set the deviation trend tooltip.
 * @prop setValueTooltip - Function to set the value tooltip.
 * @prop setValueTrendTooltip - Function to set the value trend tooltip.
 * @prop {@link Tooltips} - The remaining tooltips for the histogram.
 * @interface
 */
export type RatingTooltipProps = {
  setDeviationTooltip: (value: number) => string;
  setDeviationTrendTooltip: (value: number) => string;
  setValueTooltip: (value: number) => string;
  setValueTrendTooltip: (value: number) => string;
};

/**
 * The prop type for the `Rating` component.
 *
 * @prop ratingValue - The rating value.
 * @prop ratingValueTrend - The rating value trend.
 * @prop ratingDeviation - The rating deviation.
 * @prop ratingDeviationTrend - The rating deviation trend.
 * @prop maxRatingDeviation - The maximum rating deviation.
 * @prop title - The title of the rating.
 * @prop tooltips - The tooltips of the rating.
 * @prop width - The width of the rating.
 * @interface
 */
export type RatingProps = {
  ratingValue: number;
  ratingValueTrend: number;
  ratingDeviation: number;
  ratingDeviationTrend: number;
  maxRatingDeviation: number;
  title?: Titles["title"];
  tooltips?: RatingTooltipProps;
  width?: Size["width"];
};

const Rating = ({
  ratingValue,
  ratingValueTrend,
  ratingDeviation,
  ratingDeviationTrend,
  maxRatingDeviation,
  title,
  tooltips,
  width,
}: RatingProps): ReactElement<RatingProps> => {
  useEffect(() => {
    rating(
      {
        ratingValue,
        ratingValueTrend,
        ratingDeviation,
        ratingDeviationTrend,
        maxRatingDeviation,
      },
      {
        selector: "#rating-chart",
        title: title,
        tooltips: {
          setDeviationTooltip: tooltips?.setDeviationTooltip,
          setDeviationTrendTooltip: tooltips?.setDeviationTrendTooltip,
          setValueTooltip: tooltips?.setValueTooltip,
          setValueTrendTooltip: tooltips?.setValueTrendTooltip,
        },
        width: width,
      }
    );
  }, [
    ratingValue,
    ratingValueTrend,
    ratingDeviation,
    ratingDeviationTrend,
    maxRatingDeviation,
    title,
    tooltips,
    width,
  ]);

  return <div id="rating-chart" />;
};

/**
 * The `Rating` component.
 *
 * This component shows a rating chart.
 *
 * @param props - The props of the component.
 * @returns - The `Rating` component.
 *
 * @example
 * ```tsx
 * <Rating
 * ratingValue={4.5}
 * ratingValueTrend={0.5}
 * ratingDeviation={0.5}
 * ratingDeviationTrend={0.5}
 * maxRatingDeviation={1}
 * title="Rating"
 * tooltips={{
 * setDeviationTooltip: (value) => `Deviation: ${value}`,
 * setDeviationTrendTooltip: (value) => `Deviation Trend: ${value}`,
 * setValueTooltip: (value) => `Value: ${value}`,
 * setValueTrendTooltip: (value) => `Value Trend: ${value}`,
 * }}
 * width={500}
 * />
 */

export default Rating;
