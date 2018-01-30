import pipe from './pipe';

describe('pipe', () => {
  test('it can pipe functions together to re-create |> operator', () => {
    const addOne = num => num + 1;
    const multiplyByTwo = num => num * 2;

    expect(pipe(addOne, multiplyByTwo)(5)).toEqual(12);
  });
});