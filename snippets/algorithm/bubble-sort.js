function bubbleSort(data) {
  const res = [...data];
  const { length } = res;

  // cSpell: disable-next-line

  for (let i = 0; i < length - 1; i++) {
    // cSpell: disable-next-line

    for (let j = 0; j < length - 1 - i; j++) {
      if (res[j] > res[j + 1]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
      }
    }
  }

  return res;
}

export { bubbleSort };
