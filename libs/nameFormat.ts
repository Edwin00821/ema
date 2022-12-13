export const nameFormat = (nameInCapitalLeters: string) => {
  const ArrayNamesCorrect = nameInCapitalLeters.split(' ').map((name) =>
    name
      .split('')
      .map((letter, index) =>
        index === 0 ? letter.toUpperCase() : letter.toLowerCase()
      )
      .join('')
  );

  let nameCorrect = '';

  ArrayNamesCorrect.forEach((name) => {
    nameCorrect += name + ' ';
  });

  return nameCorrect;
};
