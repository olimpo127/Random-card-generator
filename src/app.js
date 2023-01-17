/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let diamondIcon = "♦";
let heartIcon = "♥";
let spadeIcon = "♠";
let cloverIcon = "♣";
let kinds = [diamondIcon, heartIcon, spadeIcon, cloverIcon];

let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
let randomKind = kinds[Math.floor(Math.random() * kinds.length)];

let finalNumber = document.querySelector("#number");
let finalKind = document.querySelector("#topIcon");
let finalKind2 = document.querySelector("#bottomIcon");

finalNumber.innerHTML = randomNumber;
finalKind.innerHTML = randomKind;
finalKind2.innerHTML = randomKind;
