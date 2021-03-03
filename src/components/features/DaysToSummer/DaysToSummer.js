import React from 'react';
import PropTypes from 'prop-types';
import { calculateDaysToSummer } from '../../../utils/calculateDaysToSummer';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  render() {
    const {date=new Date()} = this.props;
    return (
      <div>
        <h3 className={styles.title}>
          {calculateDaysToSummer(date) !== null ? calculateDaysToSummer(date) : '' }
        </h3>
      </div>
    );
  }
}
DaysToSummer.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default DaysToSummer;
