export function getRandomIntInclusive(min, max) {
  // Source:
  // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
  // - https://underscorejs.org/#random
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getBlobBorderRadius() {
  // Source: https://codepen.io/LekovicMilos/pen/omVzYv
  const percentage1 = getRandomIntInclusive(25, 75);
  const percentage2 = getRandomIntInclusive(25, 75);
  const percentage3 = getRandomIntInclusive(25, 75);
  const percentage4 = getRandomIntInclusive(25, 75);

  const percentage11 = 100 - percentage1;
  const percentage21 = 100 - percentage2;
  const percentage31 = 100 - percentage3;
  const percentage41 = 100 - percentage4;

  return `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;
}
