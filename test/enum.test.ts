import { YesNo } from '../src/enum';

describe('Enum default value test YesNo', () => {
  it('1', () => {
    expect(YesNo.No).toEqual(1);
  });
  it('0', () => {
    expect(YesNo.Yes).toEqual(0);
  });
});
