const sumAndQuotient = () => {
  let promtA = +prompt();
  if (isNaN(promtA) || !promtA) return 'Некорректный ввод!';
  let promtB = +prompt();
  if (isNaN(promtB) || !promtB) return 'Некорректный ввод!';

  let res = `Ответ: ${promtA + promtB}, ${promtA / promtB}`;
  return res;
};
console.log(sumAndQuotient());
