import { SpiderGraph, SpiderGraphDataProps, SpiderGraphProps } from "../Charts";
import { render } from "@testing-library/react";

describe("SpiderGraph", () => {
  const mockData: SpiderGraphDataProps[] = [{ key: "test", value: 0 }];
  const mockMinRatingValue = 0;

  it("renders without input", () => {
    const spiderGraph = render(
      <SpiderGraph data={mockData} minRatingValue={mockMinRatingValue} />
    );

    expect(spiderGraph).toBeTruthy();
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
    const mockSetTooltip = jest.fn().mockReturnValue("test");
    const mockTitle = "test";

    const spiderGraphProps: SpiderGraphProps = {
      data: mockData,
      minRatingValue: mockMinRatingValue,
      color: mockColor,
      margins: mockMargins,
      size: mockSize,
      setTooltip: mockSetTooltip,
      title: mockTitle,
    };

    const spiderGraph = render(<SpiderGraph {...spiderGraphProps} />);

    expect(spiderGraph).toBeTruthy();
  });
});
