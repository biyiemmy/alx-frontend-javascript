export default function hasValuesFromArray(set, arr) {
  return array.every((value) => set.has(value));
}
