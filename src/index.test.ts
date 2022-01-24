import { main } from './index';

test('validate main function', () => {
  expect(main([0, 5, 12, 1, 25, 3])).toMatchObject([0, 1, 3, 5, 12, 25]);
});
