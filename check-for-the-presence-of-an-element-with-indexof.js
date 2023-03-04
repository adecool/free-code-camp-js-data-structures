function quickCheck(arr, elem) {
  // Only change code below this line
  let index = arr.indexOf(elem);
  if (arr[index]) {
    return true;
  }else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));