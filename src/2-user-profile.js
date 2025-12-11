// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  return {
    username: username,
    email: email,
    loginCount: 0,
    isActive: true
  }
};
const user1 = createUser("coder123", "coder@example.com");
console.log(user1)

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  user.loginCount += 1
  return user

};


// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false
  delete user.email
  return user
};
deactivateUser(user1);
console.log(user1.isActive); // false
console.log(user1.email); // undefined

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  for (let key in user) {
    console.log(`${key}: ${user[key]}`);
  }

};

console.log(printUserInfo(user1));
// username: coder123
// email: coder@example.com
// isActive: true
// loginCount: 0

// BONUS: Return a true copy of the user object (not a reference)

const cloneUser = (user) => {
  const clonedUser = { ...user1 }

  return cloneUser

};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
