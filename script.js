const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  n = Number(n); // important (prompt gives string)

  let result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      result.push(currentChunk);
      currentChunk = [num];
      currentSum = num;
    }
  }

  // push last chunk
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));