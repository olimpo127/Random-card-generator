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

let diamondIcon = "fa-sharp fa-solid fa-diamond";
let heartIcon = "fa-sharp fa-solid fa-heart";
let spadeIcon = "fa-sharp fa-solid fa-spade";
let cloverIcon = "fa-sharp fa-solid fa-clover";
let kinds = [diamondIcon, heartIcon, spadeIcon, cloverIcon];

let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
let randomKind = kinds[Math.floor(Math.random() * kinds.length)];

let finalNumber = document.querySelector("#number");
//let finalKind = document.getElementsByClassName(".icon").className;

finalNumber.innerHTML = randomNumber;
//finalKind.className = randomKind;
