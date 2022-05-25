import deepEquality from '../helpers/deepEquality.js';

test("returns true on equal objects", () => {
  const firstObject = { name: 'alf', job: 'developer', annoyed: true }
  const secondObject = { name: 'alf', job: 'developer', annoyed: true }
  expect(deepEquality(firstObject, secondObject)).toBe(true)
})

test("returns false on unequal objects", () => {
  const firstObject = { name: 'alf', job: 'developer', annoyed: true }
  const secondObject = { name: 'jay', job: 'developer', annoyed: false }
  expect(deepEquality(firstObject, secondObject)).toBe(false)
})
