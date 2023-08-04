const removeNonWordCharachers = (word) => {
  const regex = /\w+/;

  const [match] = word.match(regex);

  return match;
};

export default removeNonWordCharachers;
