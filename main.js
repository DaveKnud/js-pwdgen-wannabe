//my variables
let nameUser,surnameUser,favouriteColor,userAge,birthYear,message;


//name required
nameUser = prompt ("Insert Your Name");
console.log(nameUser);
document.getElementById("my_name").innerHTML = "My name is " + nameUser;

//Surname required
surnameUser = prompt ("Insert Your Surname");
console.log(surnameUser);
document.getElementById("my_surname").innerHTML = "My surname is " + surnameUser;

//Fav color
favouriteColor = prompt ("Insert Your Favourite Color");
console.log(favouriteColor);
document.getElementById("my_fav_col").innerHTML = "My fav color is " + favouriteColor;

//Age
const currentYear = 2023;
userAge = prompt("Insert Your Age");
console.log(userAge);
birthYear = currentYear - userAge;
console.log(birthYear);
message = `You are born in ${birthYear}`;
console.log(message);
document.getElementById("my_age").innerHTML = message;


//Generate Password
document.getElementById("password").innerHTML = "Your password is " + nameUser + surnameUser + favouriteColor;







