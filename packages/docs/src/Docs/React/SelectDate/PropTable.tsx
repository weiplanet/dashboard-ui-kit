import * as React from 'react';
import { Link } from 'react-router-dom'
import { Widget } from '@duik/it/index'


import { PropTable, properties, DocsTable } from '../../components'

// renderTitle?: (visibleDate: Date, activeView: DatePickerView) => React.ReactNode,
// renderMonthName?: (monthNumber: number) => React.ReactNode,
// renderWeekdayShort?: (weekdayNumber: number) => React.ReactNode,
// isRange?: M,
// value?: DatePickerValue<M>,
// onDateChange?: DatePickerOnChangeRange<M>,
// minDate?: Date,
// maxDate?: Date,
// initialVisibleDate?: Date,
// weekdayOffset?: number,

const DatePickerValue = <Link to="#DatePickerValue">DatePickerValue</Link>

const itemProps = [
  {
    prop: 'placeholder',
    propType: 'React.ReactNode',
    required: false,
  },
  {
    prop: 'label',
    propType: 'React.ReactNode',
    required: false,
    desc: 'Label to be displayed above the select.'
  },
  {
    prop: <Link to="/docs/react/date-picker#props">DatePicker</Link>,
    required: false,
    desc: 'You can pass any prop that DatePicker accepts as well, e.g. minDate'
  },
  properties.rest({
    desc: <>Rest of the properties are passed down to <Link to="/docs/react/dropdown">Dropdown</Link>.</>
  })
]


export const ReactDocsButton = () => {

  return (
    <>

      <h2 id="props">Props</h2>
      <Widget>
        <PropTable itemProps={itemProps} />
      </Widget >
    </>
  )
}

export default ReactDocsButton;