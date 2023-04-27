//my variables
let nameUser,surnameUser,favouriteColor;
//name required
nameUser = prompt (" Insert Your Name");
console.log(nameUser);

document.getElementById("my_name").innerHTML = "My name is " + nameUser;

//Surname required

surnameUser = prompt ("Insert Your Surname");
console.log(surnameUser);

document.getElementById("my_surname").innerHTML = "My surname is " + surnameUser;

//Fav color
favouriteColor = prompt ("Insert Your Favourite Color");
console.log(favouriteColor);

document.getElementById("my_fav_col").innerHTML = "My favourite color is " + favouriteColor;


