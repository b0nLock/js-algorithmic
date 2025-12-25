function myFilter(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError("Первый аргумент должен быть массивом");
  }
  if (typeof callback !== "function") {
    throw new TypeError("Второй аргумент должен быть функцией");
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(array, i)) continue;

    const element = array[i];
    if (callback(element, i, array)) {
      result.push(element);
    }
  }

  return result;
}

const nums = [1, 2, 3, 4, 5];

const evens = myFilter(nums, (n) => n % 2 === 0);
console.log(evens);

const words = ["apple", "banana", "kiwi"];
const long = myFilter(words, (w) => w.length > 4);
console.log(long);
