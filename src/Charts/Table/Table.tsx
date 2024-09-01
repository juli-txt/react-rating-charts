import { Table as table } from "rating-charts.js";
import { memo, useEffect } from "react";
import { Margins, Size } from "../../Types";

/**
 * The prop type for the `TableData` prop.
 *
 * @prop timestamp - The timestamp of the table data.
 * @prop value - The value of the table data.
 * @prop deviation - The deviation of the table data.
 * @interface
 */
export type TableDataProps = {
  timestamp: Date;
  value: number;
  deviation: number;
};

/**
 * The prop type for the `TableColumn` prop.
 *
 * @prop header - The header of the table column.
 * @prop key - The key of the table column.
 * @interface
 */
export type TableColumnProps = {
  header: string;
  key: "timestamp" | "value" | "deviation";
};

/**
 * The prop type for the `Table` component.
 *
 * @prop data - The data for the table.
 * @prop columns - The columns for the table.
 * @prop marginTop - The top margin of the table.
 * @prop setRGBColor - Function to set the RGB color.
 * @prop setHeaderTooltip - Function to set the header tooltip.
 * @prop minSize - The minimum size of the table.
 * @prop maxSize - The maximum size of the table.
 * @prop title - The title of the table.
 * @interface
 */
export type TableProps = {
  data: TableDataProps[];
  columns: TableColumnProps[];
  marginTop?: Margins["marginTop"];
  setRGBColor?: (alpha: number) => string;
  setHeaderTooltip?: (header: string) => string;
  minSize?: Size;
  maxSize?: Size;
  title?: string;
};

const Table = ({
  data,
  columns,
  marginTop,
  setHeaderTooltip,
  setRGBColor,
  minSize,
  maxSize,
  title,
}: TableProps) => {
  useEffect(() => {
    table(data, columns, {
      selector: "#table",
      marginTop: marginTop,
      setRGBColor: setRGBColor,
      size: {
        maxHeight: maxSize?.height,
        maxWidth: maxSize?.width,
        minHeight: minSize?.height,
        minWidth: minSize?.width,
      },
      setHeaderTooltip: setHeaderTooltip,
      title: title,
    });
  }, [
    data,
    columns,
    marginTop,
    setHeaderTooltip,
    setRGBColor,
    minSize,
    maxSize,
    title,
  ]);

  return <div id="table" />;
};

/**
 * The `Table` component.
 *
 * This component shows a table.
 *
 * @param props - The props for the component.
 * @returns - The `Table` component.
 *
 * @example
 * ```tsx
 * <Table
 * data={[
 * { timestamp: new Date(), value: 1, deviation: 0.1 },
 * { timestamp: new Date(), value: 2, deviation: 0.2 },
 * { timestamp: new Date(), value: 3, deviation: 0.3 },
 * ]}
 * columns={[
 * { header: "Timestamp", key: "timestamp" },
 * { header: "Value", key: "value" },
 * { header: "Deviation", key: "deviation },
 * ]}
 * marginTop={10}
 * setRGBColor={(alpha) => `rgba(0, 0, 0, ${alpha})`}
 * setHeaderTooltip={(header) => `Header: ${header}`}
 * minSize={{ height: 100, width: 100 }}
 * maxSize={{ height: 200, width: 200 }}
 * title="Table"
 * />
 * ```
 */
export default memo(Table);
