const RomanConverter = require('../libs/roman-converter');

describe('Roman Converter', () => {
  it('should convert to an accurate roman numeral for numbers between 1 to 255', () => {
    expect(RomanConverter.convertToRoman(39)).toEqual('XXXIX');
    expect(RomanConverter.convertToRoman(160)).toEqual('CLX');
    expect(RomanConverter.convertToRoman(207)).toEqual('CCVII');

    expect(RomanConverter.convertToRoman(246)).toEqual('CCXLVI');
    expect(RomanConverter.convertToRoman(249)).toEqual('CCXLIX');
    expect(RomanConverter.convertToRoman(255)).toEqual('CCLV');
  });

  it('should convert to an accurate roman numeral for an expanded set from 256 to 3999', () => {
    expect(RomanConverter.convertToRoman(789)).toEqual('DCCLXXXIX');
    expect(RomanConverter.convertToRoman(1009)).toEqual('MIX');
    expect(RomanConverter.convertToRoman(1066)).toEqual('MLXVI');

    expect(RomanConverter.convertToRoman(2014)).toEqual('MMXIV');
    expect(RomanConverter.convertToRoman(2421)).toEqual('MMCDXXI');
    expect(RomanConverter.convertToRoman(3999)).toEqual('MMMCMXCIX');
  });

  it('should convert large numbers up to 2,200,000,000 using the Vinculum system', () => {
    expect(RomanConverter.convertToRoman(4000)).toEqual('I̅V̅');
    expect(RomanConverter.convertToRoman(4627)).toEqual('I̅V̅DCXXVII');
    expect(RomanConverter.convertToRoman(25000)).toEqual('X̅X̅V̅');
    expect(RomanConverter.convertToRoman(25459)).toEqual('X̅X̅V̅CDLIX');
    expect(RomanConverter.convertToRoman(2200000000)).toEqual('M̿M̿C̿C̿');
  });

  it('should return an error when value is not a number', () => {
    const result = RomanConverter.convertToRoman(undefined);
    expect(result).toEqual({ error: 'Enter an integer from 1 to 2,200,000,000.' });
  });

  it('should return an error when the integer is less than 1', () => {
    const result = RomanConverter.convertToRoman('0');
    expect(result).toEqual({ error: 'Enter an integer from 1 to 2,200,000,000.' });
  });

  it('should return an error when the integer is greater than 2,200,000,000', () => {
    const result = RomanConverter.convertToRoman(2200000001);
    expect(result).toEqual({ error: 'Enter an integer from 1 to 2,200,000,000.' });
  });
})