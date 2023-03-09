/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let getRandomPosition = length => {
    return Math.floor(Math.random() * length);
  };

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoValue = who[getRandomPosition(who.length)];
  let actionValue = action[getRandomPosition(action.length)];
  let whatValue = what[getRandomPosition(what.length)];
  let whenValue = when[getRandomPosition(when.length)];

  document.getElementById(
    "excuse"
  ).innerHTML = `<p id=\`excuse\`>${whoValue} ${actionValue} ${whatValue} ${whenValue}</p>`;
  console.log("Hello Rigo from the console!");
};
