function getSumOfHoods(initialNumber, expansion1989 = undefined, expansion2019 = undefined) {
  if (!expansion1989) { expansion1989 = 89 }
  if (!expansion2019) { expansion2019 = 19 }
  return initialNumber + expansion1989 + expansion2019;
}

export default getSumOfHoods;
