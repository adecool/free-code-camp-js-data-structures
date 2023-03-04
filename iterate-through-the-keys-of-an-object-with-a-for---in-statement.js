const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(userObj) {
  // Only change code below this line
  let count = 0;
  for (let user in userObj) {
    let name = userObj[user]
    for (let onlineTest in name) {
        if(name[onlineTest] == true ){
          count +=1;
        }
    }
  }
  return count
  // Only change code above this line
}

console.log(countOnline(users));