import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const mockProps = {
  days: 10,
  firstDate: new Date('June 01, 2021'),
  firstDateNumberOfDays: 19,
  secondDate: new Date('February 01, 2021'),
  secondDateNumberOfDays: 139,
  thirdDate: new Date('December 01, 2020'),
  thirdDateNumberOfDays: 54,
  borderDate: new Date('June 20, 2021'),
};
const select = {
  title: '.title',
};
describe ('Component DaysToSummer', () => {
  /* 1. Czy komponent się renderuje */
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  /* 2. Czy renderuje się nagłówek*/
  it('should render component with h3 inside', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });

  /*3. Czy używa propsa 'days' */
  it('should use prop "days" inside h3', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.days + ' days to summer');
  });
});

/* 4. Test sprawdzający, czy podczas daty 01.06.2021, 01.02.2021 oraz 01.12.2020 odlicza właściwie dni do lata */

