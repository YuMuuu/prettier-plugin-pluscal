// https://qiita.com/yarnaimo/items/e92600237d65876f8dd8
function chunk<T extends any[]>(arr: T, size: number): T[][] {
  return arr.reduce(
    (newarr, _, i) => (i % size ? newarr : [...newarr, arr.slice(i, i + size)]),
    [] as T[][],
  );
}

function chunk2<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Size must be greater than 0");
  if (arr.length === 0) return [];

  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, (i + 1) * size),
  );
}

export { chunk, chunk2 };
