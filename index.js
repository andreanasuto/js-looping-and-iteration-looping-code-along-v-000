// Code your solutions in this file
function printBadges(names) {
  console.log(names);
  for (let i = 0; i < names.lenght; i++) {
    console.log("Welcome ${names[i]}! You are employee #${i}");
  }

  return names
}
