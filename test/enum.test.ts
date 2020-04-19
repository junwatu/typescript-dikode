import { YesNo } from '../src/enum';

describe('Enum default value test YesNo', () => {
  it('0', () => {
    expect(YesNo.Yes).toEqual(0);
  });
  it('1', () => {
    expect(YesNo.Yes).toEqual(1);
  });
});
