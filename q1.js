const assert = require("assert");

const arrayFromStdin = require("./util/arrayFromStdin");

function q1(any) {
  const result = [];
  let j = 0;
  try {
    assert(Array.isArray(any));
    for (let i = 0; i < any.length; i++) {
      const x = any[i];
      if (typeof x !== "string") result[j++] = x;
    }
    return result;
  } catch (error) {
    throw error;
  }
}

async function main() {
  let arr = await arrayFromStdin();
  console.log(`input: ${JSON.stringify(arr)}`);
  const sol = q1(arr);
  console.log(`solution: ${JSON.stringify(sol)}`);
}

main()
  .catch(console.error)
  .finally(() => {
    process.exit(0);
  });
