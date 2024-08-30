import {
  LineGraph,
  LineGraphData,
  LineGraphTooltipProps,
  LineGraphProps,
} from "../Charts";
import { render } from "@testing-library/react";

describe("LineGraph", () => {
  const mockData: LineGraphData[] = [
    { value: 0, deviation: 0, timestamp: new Date() },
  ];
  const mockMinRatingValue = 0;

  it("renders without input", () => {
    const lineGraph = render(
      <LineGraph data={mockData} minRatingValue={mockMinRatingValue} />
    );

    expect(lineGraph).toBeTruthy();
  });

  it("renders with input", () => {
    const mockColor = "red";
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

    const lineGraphTooltips: LineGraphTooltipProps = {
      setAreaTooltip: jest.fn().mockReturnValue("test"),
      setDataTooltip: jest.fn().mockReturnValue("test"),
      setLowerDeviationTooltip: jest.fn().mockReturnValue("test"),
      setUpperDeviationTooltip: jest.fn().mockReturnValue("test"),
      setXAxisTooltip: jest.fn().mockReturnValue("test"),
      setYAxisTooltip: jest.fn().mockReturnValue("test"),
    };

    const lineGraphProps: LineGraphProps = {
      data: mockData,
      minRatingValue: mockMinRatingValue,
      color: mockColor,
      margins: mockMargins,
      size: mockSize,
      titles: mockTitles,
      tooltips: lineGraphTooltips,
    };

    const lineGraph = render(<LineGraph {...lineGraphProps} />);

    expect(lineGraph).toBeTruthy();
  });
});
