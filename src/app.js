/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

  let randWho = "";
  let randAction = "";
  let randWhat = "";
  let randWhen = "";

  for (let i = 0; i < who.length; i++) {
    randWho = who[Math.floor(Math.random() * who.length)];
  }

  for (let i = 0; i < action.length; i++) {
    randAction = action[Math.floor(Math.random() * action.length)];
  }

  for (let i = 0; i < what.length; i++) {
    randWhat = what[Math.floor(Math.random() * what.length)];
  }

  for (let i = 0; i < when.length; i++) {
    randWhen = when[Math.floor(Math.random() * when.length)];
  }

  document.getElementById(
    "excuse"
  ).innerHTML = `<p id=\`excuse\`>${randWho} ${randAction} ${randWhat} ${randWhen}</p>`;
  console.log("Hello Rigo from the console!");
};
