// Import statement di TypeScript
import { YesNo } from './enum'

// export fungsi sum
export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop boob!');
  }
  return a + b;
};

// export fungsi toJawa
export function toJawa(value: YesNo){
  switch (value) {
    case YesNo.No:
      return 'Moh!'
    case YesNo.Yes:
      return 'Yo!'
  }
}
