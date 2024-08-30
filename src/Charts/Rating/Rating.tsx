import { Rating as rating } from "rating-charts.js";
import { memo, useEffect } from "react";
import { Size, Titles } from "../../Types";

export type RatingTooltipProps = {
  setDeviationTooltip: (value: number) => string;
  setDeviationTrendTooltip: (value: number) => string;
  setValueTooltip: (value: number) => string;
  setValueTrendTooltip: (value: number) => string;
};

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
}: RatingProps) => {
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

export default memo(Rating);
