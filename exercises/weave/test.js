test('weave can combine two queues', () => {
  const one = new Queue();
  one.add(0);
  one.add(1);
  one.add(2);
  one.add(3);
  one.add(4);
  one.add(5);
  const two = new Queue();
  two.add('one');
  two.add('two');
  two.add('three');
  two.add('four');

  const result = weave(one, two);

  expect(result.remove()).toEqual(0);
  expect(result.remove()).toEqual('one');
  expect(result.remove()).toEqual(1);
  expect(result.remove()).toEqual('two');
  expect(result.remove()).toEqual(2);
  expect(result.remove()).toEqual('three');
  expect(result.remove()).toEqual(3);
  expect(result.remove()).toEqual('four');
  expect(result.remove()).toEqual(4);

  expect(result.peek()).not.toBeUndefined();
  expect(result.remove()).toEqual(5);

  expect(result.peek()).toBeUndefined();
  expect(result.remove()).toBeUndefined();
});
