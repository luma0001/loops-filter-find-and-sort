"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

let sum = 0;

function initApp() {
  console.log("initApp: app.js is running 🎉");
  loopThroughNames();
  createDom(years);
  createDom(names);
  //   teachers.forEach(ObjectToDom);
  loopTroughYears();
  //   loopThroughFiveLastYears();
  //   loopThroughFiveFirstYears();
  logNumbers();
}

// ========== forEach ========== //

// const names = ["Peter", "Oskar", "Lenka", "Rasmus"];

function loopThroughNames() {
  names.forEach(logName);
}

//Den ved hvad index betyder per automatic!
function logName(name, index) {
  //   sum++;
  // console.log(sum);
  console.log(name);

  const message = checkIndex(index);

  if (index == names.length - 1) {
    console.log("IT'S THE FINAL INDEX!");
  } else {
    console.log(message);
  }
}

function checkIndex(i) {
  let outPut;
  if (i % 2 == 0) {
    outPut = "Hver Anden";
  } else {
    outPut = i;
  }
  return outPut;
}

//Extra øvelse med DOM:
// Ikke særlig pænt, 1 liste...
function createDom(arr) {
  arr.forEach(domDown);
  //textContent = function with dom...?
}

function domDown(element) {
  const domHTML = /*html*/ `<li>${element}</li>`;
  document.querySelector("#dom").insertAdjacentHTML("beforeend", domHTML);
}

// ========== for loop ========== //

// for (let index = 0; index < names.length; index++) {
//   const name = names[indexedDB];
//   console.log(name);
// }

// for (let index = 9; index > names.length; index--) {
//   const name = names[index];
//   console.log(name);
// }

// opgave 1.2.1

function loopTroughYears() {
  for (let i = 0; i < years.length; i++) {
    if (i == years.length - 1) {
      console.log(years[i] + " This is the last year in the list");
    } else if (years[i] == 2023) {
      console.log(years[i] + " This is the current year");
    } else {
      console.log(years[i] + " index: " + i);
    }
  }
}

function loopThroughFiveFirstYears() {
  for (let i = 0; i < 5; i++) {
    console.log(years[i] + " index: " + i);
  }
}

function loopThroughFiveLastYears() {
  for (let i = 4; i < years.length; i++) {
    console.log(years[i] + " index: " + i);
  }
}

// opgave 1.2.2 Numbers

function logNumbers() {
  for (let index = 0; index < 10; index++) {
    console.log(index);
  }

  for (let i = 1; i < 11; i++) {
    console.log(i);
  }

  //   let n = 10;

  //   for (; n > 0; ) {
  //     console.log(n);
  //     n--;
  //   }
}
// ========== for of loop ========== //

// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
