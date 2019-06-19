import { plusTen } from '../src/lib/calculator';

describe('Calculator', () => {
  describe('plusTen', () => {
    it('Should increment a given number with 10 when calculator enabled', () => {
      expect(plusTen(10)).toEqual(20);
    });

    it('Should return undefined when calculator is disabled', () => {
      expect(plusTen(10, { calculatorEnabled: false })).toBeUndefined();
    });
  });
});
