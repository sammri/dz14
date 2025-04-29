const getUserWithEmail = (users, email) =>{
  users.find(({ email: e }) => e === email);

}

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
