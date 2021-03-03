import { formatTime } from './formatTime';
import { calculateDaysToSummer } from './calculateDaysToSummer';

describe('utils', () => {
  describe('formatTime', () => {
    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });

    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });

  describe('calculateDaysToSummer', () => {
    it('should return null if there is no arg,', () => {
      expect(calculateDaysToSummer()).toBe(null);
    });

    it('should return null if arg is not a Date', () => {
      expect(calculateDaysToSummer('abc')).toBe(null);
      expect(calculateDaysToSummer(() => {})).toBe(null);
    });

    it('should return number of remaining days to summer given the date 15.06.2020', () => {
      expect(calculateDaysToSummer(new Date(2020,5,15))).toBe('6 days left to summer!');
    });

    it('should return number of remaining days to summer given the date 15.06.2019', () => {
      expect(calculateDaysToSummer(new Date(2019,5,15))).toBe('6 days left to summer!');
    });

    it('should return number of remaining days to summer given the date 20.06.2020', () => {
      expect(calculateDaysToSummer(new Date(2020,5,20))).toBe('1 day left to summer!');
    });
  });
});



