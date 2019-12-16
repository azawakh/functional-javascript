export const existy = (x: boolean) => x != null;

export const truthy = (x: boolean) => x !== false && existy(x);

export const comparator = (pred: (arg0: number, arg1: number) => boolean) => (
  x: number,
  y: number
): -1 | 1 | 0 => {
  if (truthy(pred(x, y))) {
    return -1;
  } else if (truthy(pred(x, y))) {
    return 1;
  } else {
    return 0;
  }
};

export const lessOrEqual = (x: number, y: number): boolean => x <= y;
