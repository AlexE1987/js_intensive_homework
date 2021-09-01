const changeNumberSystem = () => {
  let promtA = +prompt();
  if (isNaN(promtA) || !promtA) return 'Некорректный ввод!';
  let promtB = +prompt();
  if (isNaN(promtB) || !promtB) return 'Некорректный ввод!';

  let res = promtA.toString(promtB);
  return res;
};
console.log(changeNumberSystem());
