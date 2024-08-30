import { Histogram, HistogramProps, HistogramTooltipProps } from "../Charts";
import { render } from "@testing-library/react";

describe("Histogram", () => {
  const mockData = [0];
  const mockMinRatingValue = 0;
  const mockRatingValue = 0;

  it("renders without input", () => {
    const histogram = render(
      <Histogram
        data={mockData}
        minRatingValue={mockMinRatingValue}
        ratingValue={mockRatingValue}
      />
    );

    expect(histogram).toBeTruthy();
  });

  it("renders with input", () => {
    const mockColor = "red";
    const mockSetUserInfo = jest.fn().mockReturnValue("test");
    const mockMargins = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    };
    const mockSize = { width: 0, height: 0 };
    const mockTitles = {
      title: "test",
      xAxisTitle: "test",
      yAxisTitle: "test",
    };

    const histogramTooltips: HistogramTooltipProps = {
      setUserInfoTooltip: jest.fn().mockReturnValue("test"),
      setXAxisTooltip: jest.fn().mockReturnValue("test"),
      setYAxisTooltip: jest.fn().mockReturnValue("test"),
    };

    const histogramProps: HistogramProps = {
      data: mockData,
      minRatingValue: mockMinRatingValue,
      ratingValue: mockRatingValue,
      color: mockColor,
      setUserInfo: mockSetUserInfo,
      margins: mockMargins,
      size: mockSize,
      titles: mockTitles,
      tooltips: histogramTooltips,
    };

    const histogram = render(<Histogram {...histogramProps} />);

    expect(histogram).toBeTruthy();
  });
});
