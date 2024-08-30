import { Rating, RatingProps, RatingTooltipProps } from "../Charts";
import { render } from "@testing-library/react";

declare global {
  interface SVGElement {
    getComputedTextLength: () => number;
  }
}

describe("Rating", () => {
  beforeEach(() => {
    SVGElement.prototype.getComputedTextLength = jest.fn().mockReturnValue(10);
  });

  const mockRatingValue = 0;
  const mockRatingValueTrend = 0;
  const mockRatingDeviation = 0;
  const mockRatingDeviationTrend = 0;
  const mockMaxRatingDeviation = 1;

  it("renders without input", () => {
    const rating = render(
      <Rating
        ratingValue={mockRatingValue}
        ratingValueTrend={mockRatingValueTrend}
        ratingDeviation={mockRatingDeviation}
        ratingDeviationTrend={mockRatingDeviationTrend}
        maxRatingDeviation={mockMaxRatingDeviation}
      />
    );

    expect(rating).toBeTruthy();
  });

  it("renders with input", () => {
    const mockWidth = 0;
    const mockTitle = "test";

    const ratingTooltips: RatingTooltipProps = {
      setDeviationTooltip: jest.fn().mockReturnValue("test"),
      setDeviationTrendTooltip: jest.fn().mockReturnValue("test"),
      setValueTooltip: jest.fn().mockReturnValue("test"),
      setValueTrendTooltip: jest.fn().mockReturnValue("test"),
    };

    const ratingProps: RatingProps = {
      ratingValue: mockRatingValue,
      ratingValueTrend: mockRatingValueTrend,
      ratingDeviation: mockRatingDeviation,
      ratingDeviationTrend: mockRatingDeviationTrend,
      maxRatingDeviation: mockMaxRatingDeviation,
      title: mockTitle,
      tooltips: ratingTooltips,
      width: mockWidth,
    };

    const rating = render(<Rating {...ratingProps} />);

    expect(rating).toBeTruthy();
  });
});
