import React from 'react';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {
  render() {
    const {days} = this.props;
    return (
      <div>
        <h3 className='title'>{days} days to summer</h3>
      </div>
    );
  }
}
DaysToSummer.propTypes = {
  days: PropTypes.number,
};

export default DaysToSummer;
