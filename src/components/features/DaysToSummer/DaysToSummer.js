import React from 'react';
import PropTypes from 'prop-types';
import { calculateDaysToSummer } from '../../../utils/calculateDaysToSummer';
import styles from './DaysToSummer.scss';

const DaysToSummer = ({date}) => (
  <div>
    <h3 className={styles.title}>
      {calculateDaysToSummer(date) !== null ? calculateDaysToSummer(date) : '' }
    </h3>
  </div>
);

DaysToSummer.propTypes = {
  date: PropTypes.instanceOf(Date),
};

DaysToSummer.defaultProps = {
  date: new Date(),
};

export default DaysToSummer;
