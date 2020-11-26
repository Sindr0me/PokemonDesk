import toCapitalizeFirstLetter from './toCapitilizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать 1 аргумент "ЭТо сТрока" и возвращать "Это строка"', () => {
    const str = toCapitalizeFirstLetter('ЭТо сТрока');

    expect(str).toEqual('Это строка');
  });
});
