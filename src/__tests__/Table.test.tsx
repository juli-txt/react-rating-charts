import { Table, TableDataProps, TableColumnProps, TableProps } from "../Charts";
import { render } from "@testing-library/react";

describe("Table", () => {
  const mockData: TableDataProps[] = [
    { timestamp: new Date(), value: 0, deviation: 0 },
  ];
  const mockColumns: TableColumnProps[] = [
    { header: "test", key: "timestamp" },
  ];
  const mockMinRatingValue = 0;

  it("renders without input", () => {
    const table = render(<Table data={mockData} columns={mockColumns} />);

    expect(table).toBeTruthy();
  });

  it("renders with input", () => {
    const mockMargins = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    };
    const mockSetRGBColor = jest.fn().mockReturnValue("test");
    const mockSetHeaderTooltip = jest.fn().mockReturnValue("test");
    const mockMinSize = { width: 0, height: 0 };
    const mockMaxSize = { width: 0, height: 0 };
    const mockTitle = "test";

    const tableProps: TableProps = {
      data: mockData,
      columns: mockColumns,
      marginTop: mockMargins.marginTop,
      setRGBColor: mockSetRGBColor,
      setHeaderTooltip: mockSetHeaderTooltip,
      minSize: mockMinSize,
      maxSize: mockMaxSize,
      title: mockTitle,
    };

    const table = render(<Table {...tableProps} />);

    expect(table).toBeTruthy();
  });
});
