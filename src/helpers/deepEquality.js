// const isObject = (object) => object != null && typeof object === 'object';
const deepEquality = (object1, object2) => {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  let result = true;
  if (keys1.length !== keys2.length) result = false;

  keys1.forEach((key) => {
    const val1 = object1[key];
    const val2 = object2[key];
    // const areObjects = isObject(val1) && isObject(val2);
    // if (areObjects && !deepEquality(val1, val2) || !areObjects && val1 !== val2) {
    //   return false;
    // }
    if (val1 !== val2) result = false;
  })
  return result
}

export default deepEquality;