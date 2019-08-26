import columnSizeValidator, { minColumnSize, maxColumnSize } from '.';

describe('@utils/columnSizeValidator', () => {
  it('returns true if in column range', () => {
    expect(columnSizeValidator(minColumnSize)).toBe(true);
    expect(columnSizeValidator(maxColumnSize)).toBe(true);
  });
  it('returns false if outside column range', () => {
    expect(columnSizeValidator(minColumnSize - 1)).toBe(false);
    expect(columnSizeValidator(maxColumnSize + 1)).toBe(false);
  });
});
