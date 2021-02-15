import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const today = new Date();
console.log(today);
const OrderOptionDate = ({setOptionValue, currentValue}) => (
  <div>
    <DatePicker
      selected={currentValue}
      onChange={date => setOptionValue(date)}
    />
  </div>
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

OrderOptionDate.defaultProps = {
};

export default OrderOptionDate;
