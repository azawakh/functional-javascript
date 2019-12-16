import _ from "underscore";
import { comparator, lessOrEqual } from "./utils";

// execute
const re1 = [100, 1, 0, 10, -1, -2, -1].sort(comparator(lessOrEqual));

process.stdout.write(`${re1}\n`);

const re2 = [100, 1, 0, 10, -1, -2, -1].sort(comparator(_.isEqual));

process.stdout.write(`${re2}\n`);
