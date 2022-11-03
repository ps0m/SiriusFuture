export const getRandomList = (min: number, max: number, quantity: number) => {
  const delta = max - min + 1;
  if (quantity > delta) {
    return [];
  }

  const result: number[] = [];
  while (result.length < quantity) {
    const randomValue = Math.floor(Math.random() * delta + min);
    if (!result.includes(randomValue)) {
      result.push(randomValue);
    }
  }
  return result;
};

// for (let i = 0; i < 5; i++) {
//   const randomList = getRandomList(10, 19, 5);
//   const sortList = [...randomList].sort((a, b) => a - b);

//   console.log(randomList, sortList);
// }
