import * as React from "react";
import { Link } from "react-router-dom";
import { Widget } from "@duik/it/index";

import { PropTable, properties, DocsTable } from "../../components";

// renderTitle?: (visibleDate: Date, activeView: DatepickerView) => React.ReactNode,
// renderMonthName?: (monthNumber: number) => React.ReactNode,
// renderWeekdayShort?: (weekdayNumber: number) => React.ReactNode,
// isRange?: M,
// value?: DatepickerValue<M>,
// onDateChange?: DatepickerOnChangeRange<M>,
// minDate?: Date,
// maxDate?: Date,
// initialVisibleDate?: Date,
// weekdayOffset?: number,

const DatepickerValue = <Link to="#DatepickerValue">DatepickerValue</Link>;

const itemProps = [
  {
    prop: "placeholder",
    propType: "React.ReactNode",
    required: false
  },
  {
    prop: "label",
    propType: "React.ReactNode",
    required: false,
    desc: "Label to be displayed above the select."
  },
  {
    prop: <Link to="/docs/react/datepicker#props">Datepicker</Link>,
    required: false,
    desc: "You can pass any prop that Datepicker accepts as well, e.g. minDate"
  },
  properties.rest({
    desc: (
      <>
        Rest of the properties are passed down to{" "}
        <Link to="/docs/react/dropdown">Dropdown</Link>.
      </>
    )
  })
];

export const ReactDocsButton = () => {
  return (
    <>
      <h2 id="props">Props</h2>
      <Widget>
        <PropTable itemProps={itemProps} />
      </Widget>
    </>
  );
};

export default ReactDocsButton;
