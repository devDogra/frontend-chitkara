const catName = "Tom"; 
function cat() {
    let hunger = 0;
    function walk() {
        const activity = "Walking...";
        hunger++; 
        console.log(activity, hunger); 
    }
    function eat() {
        const activity = "Eating...";
        hunger--; 
        console.log(activity, hunger); 
    }
    return { walk, eat }; 
}

const { walk, eat } = cat(); 

// const { walk, eat } = catFunctions; 

walk(); 
eat(); 
