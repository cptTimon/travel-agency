import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';



const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'TestTitle',
  promoDescription: 'This is Description',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it('should render h3 with title and div with countdown inside', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should use props title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});
/* Does communicate shows exact number of seconds */
const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};
const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);
    global.Date = trueDate;
  });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps} />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);
    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);
});

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAfterTime('11:59:58',4, mockProps.promoDescription);
});

