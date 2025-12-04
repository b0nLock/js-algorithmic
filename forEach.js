function myForEach(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError("Первый аргумент должен быть массивом");
  }
  if (typeof callback !== "function") {
    throw new TypeError("Второй аргумент должен быть функцией");
  }
  for (let i = 0; i < array.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(array, i)) continue;
    callback(array[i], i, array);
  }
}

const fruits = ["apple", "banana", "kiwi"];

myForEach(fruits, (item, index, arr) => {
  console.log(item, index, arr);
});
