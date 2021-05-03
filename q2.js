const assert = require("assert");

const arrayFromStdin = require("./util/arrayFromStdin");

function q2(any) {
  const result = [];
  let j = 0;
  try {
    assert(Array.isArray(any));
    assert(any.length >= 1);
    assert(typeof any[0] === "number");
    const size = any[0];
    assert(size >= 0);
    assert(size <= any.length - 1);

    if (size >= 1) {
      result[0] = any[1];
    }

    if (size >= 2) {
      result[size - 1] = any[size - 1 + 1];
    }

    if (size >= 3) {
      for (let i = size - 2; i >= 1; i--) {
        result[i] = any[size - i];
      }
    }

    return result;
  } catch (error) {
    throw error;
  }
}

async function main() {
  let arr = await arrayFromStdin();
  console.log(`input: ${JSON.stringify(arr)}`);
  const sol = q2(arr);
  console.log(`solution: ${JSON.stringify(sol)}`);
}

main()
  .catch(console.error)
  .finally(() => {
    process.exit(0);
  });
