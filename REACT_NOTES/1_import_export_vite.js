IMPORTS AND EXPORTS
----------------------------------
Make a function/object/variable in 1 file, use it 
in another file

/
	/script.js
	/person.js

In person.js
--------------------
// I have a constructor
export default function Person(name, age) {
	this.name = name;
	this.age = age;
}

// Usage: const p = new Person("Dev", 22)
export function describe(p) {
	console.log(`${p.name} is ${p.age} yrs old`)
}
export function speak(p) {
	console.log(`${p.name} says Hello`)
}
// Now I want to export these functions
// There are 2 types of exports => default(unnamed) and named
// default -> the main thing we are exporting
// there can only be 1 default export
// named ---> multiple

---------- in script.js -------------
       default        named
       |-v-|   |-------v-------|        
import Person, { describe, speak } from "./person.js"


const p = new Person("Dev", 22)
speak(p);

========================================================
           Setting up a React project with Vite
========================================================
Vite --> A build tool (helps us set up and run projects)

node => runtime environment. allows us to run JS 
outside of the browser 

Check if node installed 
On git bash, run:
	node -v
	npm -v
npm => node package manager, comes with node
===> Central hub for packages (code written by other people)
===> We can install packages using npm and use them in our
	project

npx command => Run a package without installing it

SETUP PROJECT ===> npx create-vite@latest
Choose options (react)

======== Project Structure =====
.gitignore 
	-> for files/folders that are to be ignored by git
index.html 
	-> the main html file that will be delivered
	-> has a div with id="root". This is where our react app will be placed
	-> all the elements react creates will go inside #root
package.json 	
	-> for our dependencies, and some project info
    	-> dependencies are pkgs our project is using
	-> see react, react-dom
package-lock.json 
	-> stores the exact versions of our dependencies
lint 
	-> styling rules

src 
	-> contains our react app

INSIDE SRC: ---->
	main.jsx 
	-> In react JS files can have .js or .jsx
	-> But to tell Vite that this is a JS file in which	
	  we're using react, we have to use .jsx
	-> this is the main js file, that is included in index.html (script tag)
	-> Tell react what el to use as the root, and render our App in it
	-> Also importing CSS, and the app and other files
	-> Imported CSS will automatically be included in our web page
	
	App.jsx
	
