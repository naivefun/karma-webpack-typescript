import { Calculator } from '../src/index';

describe('[Calculator] example tests', () => {
    let calculator = new Calculator();

    it('simple calculations', () => {
        expect(calculator.add(1, 5)).toEqual(6);
        expect(calculator.multiply(2, 10)).toEqual(20);
        expect(calculator.multiply(0, 11)).toEqual(0);
        expect(calculator.multiply(0, -11)).toEqual(-0);
    });
});
