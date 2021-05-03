const assert = require("assert");
const util = require("util");
const readline = require("readline");

const parse = require("./parse");

let rl, q;

module.exports = async function arrayFromStdin(
  query = 'Please specify the next item of the array:\n(double quote for string)\n(press "Enter" to finish)\n'
) {
  let result = [];
  try {
    console.log(query);

    if (!rl) {
      rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    }

    if (!q) {
      q = (query) =>
        new Promise((res) => rl.question(query ? `${query} ` : "", res));
    }
    {
      let ans = "";
      do {
        ans = parse(await q());
        if (ans) result.push(ans);
      } while (ans !== "");
    }
  } catch (error) {
  } finally {
    return result;
  }
};
