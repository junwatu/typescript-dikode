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

describe('Enum deafult value test', () => {
  it('0', () =>{
    expect(YesNo.Yes).toEqual(0);
  })
  it('1', () =>{
    expect(YesNo.Yes).toEqual(1);
  })
})