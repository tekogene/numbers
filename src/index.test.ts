import { mergeSort } from './index';

test('validate main function', () => {
  expect(mergeSort([0, 5, 12, 1, 25, 3])).toMatchObject([0, 1, 3, 5, 12, 25]);
  expect(mergeSort([3, 0, 2, 1, 5])).toMatchObject([0, 1, 2, 3, 5]);
});
