// Named exports
// import {Person, introduce, speak} from "./person.js"

// Default export 
import p, { introduce, speak }  from "./person.js"

const dev = new p("Dev", 22);
introduce(p); 
speak(p);