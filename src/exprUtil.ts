function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Size must be greater than 0");
  if (arr.length === 0) return [];

  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, (i + 1) * size),
  );
}

export { chunk };
