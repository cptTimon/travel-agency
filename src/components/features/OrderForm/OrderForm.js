import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripId, countryCode, tripName) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    countryCode,
    tripName,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if(
    options.name !== ''
    && options.contact !== ''
  ){
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
  else if (options.name === '' && options.contact !== '' ) {
    alert('Please fill in "Your name" box!');
  }
  else if (options.name !== '' && options.contact === '') {
    alert('Please fill in "Contact info" box!');
  }
  else {
    alert('Please fill in "Contact info" and "Your name" boxes!');
  }
};

const OrderForm = ({tripCost, options, setOrderOption, tripDuration, tripId, countryCode, tripName}) => (
  <Row>
    {pricing.map(({...option}) => (
      <Col md={4} key={option.id}>
        <OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} tripDuration={tripDuration} />
      <Button onClick={() => sendOrder(options, tripCost, tripId, countryCode, tripName)}>Order now!</Button>
    </Col>
  </Row>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDuration: PropTypes.number,
  startDate: PropTypes.string,
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
  tripName: PropTypes.string,
};
export default OrderForm;
