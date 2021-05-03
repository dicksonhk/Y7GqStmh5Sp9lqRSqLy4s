const parse = (input) => {
  try {
    return JSON.parse(input);
  } catch (_error) {
    return input;
  }
};

module.exports = parse;
