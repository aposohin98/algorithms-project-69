const removeNonWordCharachers = (word) => {
  if (!word) {
    return word;
  }

  const regex = /\w+/;

  const matches = word.match(regex);

  if (!matches) {
    return '';
  }

  const [match] = matches;

  return match;
};

export default removeNonWordCharachers;
