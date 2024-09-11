// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
// import validator from 'validator';
// console.log('Is mango@mail.com a valid email?:', validator.isEmail('mango@mail.com'));
// W pliku main.js
import validator from "validator";

console.log(
  "Is mango@mail.com a valid email?: ",
  validator.isEmail("mango@mail.com")
); // Is mango@mail.com a valid email?: true

console.log(
  "Is Mangodogmail.com a valid email?: ",
  validator.isEmail("Mangodogmail.com")
); // Is mango@mail.com a valid email?: false

