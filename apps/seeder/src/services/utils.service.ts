/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Get a random item from array.
 * @param array the array.
 * @returns the item.
 */
export function getRandom(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get a random integer from the given range
 * @param min the minimum value.
 * @param max the maximum value.
 * @returns the generated number.
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Get a random boolean. 50% chance.
 * @returns a boolean.
 */
export function getRandomBoolean() {
  return Math.random() > 0.5;
}

/**
 * Get a boolean that has X chance of being true.
 * @param chance The chance as a float between 0 and 1.
 * @returns the result.
 * @example getRandomChance(0.3) // 30% chance of being true
 */
export function getRandomChance(chance: number) {
  return Math.random() > chance;
}
