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

export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);
