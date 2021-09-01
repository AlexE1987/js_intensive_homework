const enterNumber = () => {
  let promtA = +prompt();
  let promtB = +prompt();
  if (isNaN(promtA) || isNaN(promtB)) {
    console.log('Некорректный ввод!');
  }
  let changeNumberSystem = promtA.toString(promtB);
  let sumAndQuotient = `Ответ: ${promtA + promtB}, ${promtA / promtB}`;
  console.log(changeNumberSystem);
  console.log(sumAndQuotient);
};
enterNumber();
