const double = (nums) => {
  let numbers = [];
    nums.forEach((val) => {
    numbers.push(val * 2);
  });
  return numbers;
}

const onlyEvens = (nums) => {
  let numbers = [];
  nums.forEach((val) => {
    if (val % 2 === 0) {
      numbers.push(val);
    }
  });
  return numbers;
}

const showFirstAndLast = (names) => {
  let firstLast = [];
  names.forEach((val) => {
    firstLast.push(val[0] + val[val.length - 1]);
  });
  return firstLast;
}

const addKeyAndValue = (arr, key, value) => {
  arr.forEach((val) => {
    val[key] = value;
  });
  return arr;
}

const vowelCount = (str) => {
  let vowels = 'aeiou';
  let vowelCount = {};
  let strArr = str.toLowerCase().split('');
  strArr.forEach((val) => {
    if (vowels.indexOf(val) !== -1) {
      if (vowelCount[val]) {
        vowelCount[val]++;
      } else {
        vowelCount[val] = 1;
      }
    }
  });
  return vowelCount;
}

const doubleValuesWithMap = (arr) => {
  return arr.map((val) => {
    return val * 2;
  });
}

const valTimesIndex = (arr) => {
  return arr.map((val, i) => {
    return val * i;
  });
}

const extractKey = (array, key) => {
  return array.map((value) => {
    return value[key];
  });
}

const extractFullName = (array) => {
  return array.map((value) => {
    return value.first + ' ' + value.last;
  });
}

const filterByValue = (arr, key) => {
  return arr.filter((value) => {
    return value[key] !== undefined;
  });
}

const find = (arr, searchValue) => {
  return arr.filter((value) => {
    return value === searchValue;
  })[0];
}

const findInObj = (arr, key, searchValue) => {
  return arr.filter((value) => {
    return value[key] === searchValue;
  })[0];
}

const removeVowels = (str) => {
  let vowels = 'aeiou';
  let strArr = str.toLowerCase().split('');
  return strArr.filter((value) => {
    return vowels.indexOf(value) === -1;
  }).join('');
}

const doubleOddNumbers = (array) => {
  return array.filter((value) => {
    return value % 2 !== 0;
  }).map((value) => {
    return value * 2;
  });
}
