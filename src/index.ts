import _ from "underscore";

const existy = (x: boolean) => x != null;

const truthy = (x: boolean) => x !== false && existy(x);

const comparator = (pred: (arg0: number, arg1: number) => boolean) => (
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

const lessOrEqual = (x: number, y: number): boolean => x <= y;

// execute
const re1 = [100, 1, 0, 10, -1, -2, -1].sort(comparator(lessOrEqual));

process.stdout.write(`${re1}\n`);

const re2 = [100, 1, 0, 10, -1, -2, -1].sort(comparator(_.isEqual));

process.stdout.write(`${re2}\n`);
