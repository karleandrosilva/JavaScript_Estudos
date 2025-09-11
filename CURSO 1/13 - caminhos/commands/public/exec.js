import { sum } from "../../functions/math/sum.js"

export function exec(name) {

    console.log(name, "executou uma soma");

    console.log(sum(10, 10));
}