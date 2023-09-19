function longestCommonPrefix(a) {
  let arrSize = a.length;

  if (arrSize == 0) return "";

  if (arrSize == 1) return a[0];
  a.sort();

  let end = Math.min(a[0].length, a[arrSize - 1].length);

  let i = 0;
  while (i < end && a[0][i] == a[arrSize - 1][i]) i++;

  let prefix = a[0].substring(0, i);
  return prefix;
}

console.log(longestCommonPrefix(["arr", "array", "arrayd", "arsds"]));
