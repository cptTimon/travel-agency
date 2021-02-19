import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('it should render correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' image='image.jpg' tags={[]} />);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });

  it('it img should have correct src and alt', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='trip' tags={[]} />);
    const expectedImgSrc = 'image.jpg';
    const expectedImgAlt = 'trip';
    expect(component.find('img').prop('src')).toEqual(expectedImgSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImgAlt);
  });

  it('it should render correctly props name, cost and days', () => {
    const component = shallow(<TripSummary id='id' image='image.jpg' name='trip' cost='2$' days={2} tags={[]} />);
    const expectedPropName = 'trip';
    const expectedPropCost = 'from 2$';
    const expectedPropDays = '2 days';
    expect(component.find('.title').text()).toEqual(expectedPropName);
    expect(component.find('.details').childAt(0).text()).toEqual(expectedPropDays);
    expect(component.find('.details').childAt(1).text()).toEqual(expectedPropCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });

  it('should render span from arrat tags in correct order', () => {
    const component = shallow(<TripSummary image='image.jpg' tags={['pierwszy', 'drugi', 'trzeci']} />);
    expect(component.find('.tags').childAt(0).text()).toEqual('pierwszy');
    expect(component.find('.tags').childAt(1).text()).toEqual('drugi');
    expect(component.find('.tags').childAt(2).text()).toEqual('trzeci');
  });

  it('should not render div with class "tags" when array is not given', () => {
    const component = shallow(<TripSummary image='image.jpg' tags={[]} />);

    expect(component.find('.tags')).toMatchObject({});
  });
});
