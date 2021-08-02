function solution(number) {
  let result = 0;
  let n = 0;

  for (let i = 0; i < number - 1; i++) {
    n++;
    if (Number.isInteger(n / 3) || Number.isInteger(n / 5)) {
      result = result + n;
    }
  }

  return result;
}

solution(10);
