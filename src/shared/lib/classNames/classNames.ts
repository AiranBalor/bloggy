// Record - специальный тип для объектов в TS, первый аргумент - тип ключа, второй
type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods?: Mods,
  additional?: string[],
): string {
  // склеим переданные параметры в единую строку для классов
  // при фильтрации из mods извлекаются ключи и значения, и фильтруются на истинность значений. ключи со значением false в строку классов не попадут
  return [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
    // здесь отфильтрованный массив ключей и значений превратим в массив ключей
      .map(([sls]) => sls),
  ].join(' ');
}
