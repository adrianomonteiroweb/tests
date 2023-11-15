const deepEquals = (object1, object2) => {
  const keys_object1 = Object.keys(object1);
  const keys_object2 = Object.keys(object2);

  if (keys_object1.length !== keys_object2.length) {
    return false;
  }

  for (let chave of keys_object1) {
    if (!keys_object2.includes(chave)) {
      return false;
    }

    if (object1[chave] !== object2[chave]) {
      return false;
    }
  }

  return true;
};

module.exports = {
  deepEquals,
};
