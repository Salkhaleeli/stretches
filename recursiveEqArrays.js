const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let arr1Mod = arr1.flat();
  let arr2Mod = arr2.flat();
  console.log(arr1Mod, arr2Mod);
  if (arr1Mod.length !== arr2Mod.length) {
    return false;
  }
  for (const i of arr1Mod) {
    if (arr1Mod[i] !== arr2Mod[i]) {
      return false
    }
  }
  return true
};
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)