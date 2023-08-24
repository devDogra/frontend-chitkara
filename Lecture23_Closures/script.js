// A function's SCOPE => All the variables
// that function can access
// Use the cat example from the beginning

let count = 0;

function counter() {
    let inc = 1;
    count = count + inc;
}

// console.log(count); 
// counter();
// console.log(count); 
/* -------------------------------------------------------------------------- */
// Can create functions inside funcs
const catName = "Tom"; 
function cat() {
    let hunger = 0;

    // is 'msg' in cat()'s scope? NO!
    // but 'hunger' is in eat()'s scope!
    function eat() {
        let msg = "Eating...";
        hunger--;
        console.log(msg, "hunger is now ", hunger); 
    }

    function walk() {
        hunger++; 
        console.log("Walking...", " hunger is now ", hunger); 
    }

    // hunger is in the scope of 'eat' and 'walk'

    walk();
    walk();
    eat();
    walk();

    console.log(hunger); 

    // Now I will return this walk function
    return walk; 
}


const walk = cat();

// Now when I call walk, what will happen? 
walk();
// walk retains its scope (the hunger variable) even after being
// returned

// this is closure => funcs retain their scope even after being passed around
// and called outside of their scope

// bc see, we're calling walk at the very outside (global scope), and here there is no 
// variable in the scope except catName 



