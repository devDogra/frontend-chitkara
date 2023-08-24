

const catName = "Tom";

function cat() {
    const hunger = 0;

    function walk() {
        const action = "Walking...";
        hunger++;
        console.log(action, hunger); 
    }

    function eat() {
        const action = "Eating...";
        hunger--;
        console.log(action, hunger);
    }

    return walk; 
}

const walk = cat();
walk();

