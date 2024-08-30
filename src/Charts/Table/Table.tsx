import { Table as table } from "rating-charts.js";
import { memo, useEffect } from "react";
import { Margins, Size } from "../../Types";

export type TableDataProps = {
  timestamp: Date;
  value: number;
  deviation: number;
};

export type TableColumnProps = {
  header: string;
  key: "timestamp" | "value" | "deviation";
};

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

export default memo(Table);
