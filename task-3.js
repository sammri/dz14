const getUsersWithGender = (users, gender) =>
  users.filter(({ gender: g }) => g === gender).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male'));