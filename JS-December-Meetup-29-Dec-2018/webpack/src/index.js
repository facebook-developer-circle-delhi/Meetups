// import {foo1} from './header';
// console.log(foo1);
import {footer} from './footer'
import {createButton} from './header';
const Button=createButton("good");;
document.body.appendChild(Button);
document.body.appendChild(footer);