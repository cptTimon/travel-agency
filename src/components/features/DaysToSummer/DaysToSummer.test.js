import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const mockProps = {
  firstDate: new Date(2020,5,1),
  borderDate: new Date(2020,5,20),
  secondDate: new Date(2020,8,25),
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
  /* 3. Czy przy podanych datach wyświetla się właściwla liczba dni */
  describe('should give proper number of days left to summer on specific dates', () => {
    it('01.06.20', () => {
      const component = shallow(<DaysToSummer date={mockProps.firstDate}/>);
      expect(component.find(select.title).text()).toEqual('20 days left to summer!');
    });
    it('20.06.2020', () => {
      const component = shallow(<DaysToSummer date={mockProps.borderDate}/>);
      expect(component.find(select.title).text()).toEqual('1 day left to summer!');
    });
    it('25.09.2020', () => {
      const component = shallow(<DaysToSummer date={mockProps.secondDate}/>);
      expect(component.find(select.title).text()).toEqual('269 days left to summer!');
    });
  });
});

