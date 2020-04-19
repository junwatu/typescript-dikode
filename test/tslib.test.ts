import { sum, toJawa } from '../src';
import { YesNo } from '../src/enum';

describe('typescript dikode test', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it("Yes!", () => {
    expect(toJawa(YesNo.Yes)).toEqual("Yo!");
  });

  it("No!", () => {
    expect(toJawa(YesNo.No)).toEqual("Moh!");
  })
});





